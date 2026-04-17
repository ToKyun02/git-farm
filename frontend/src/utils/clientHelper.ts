import ky from 'ky';

const BASE_URL = import.meta.env.VITE_BASE_URL as string;

let refreshPromise: Promise<void> | null = null;

async function refreshAccessToken(): Promise<void> {
    await ky.post(`${BASE_URL}/api/auth/token/refresh/`, {
        credentials: 'include',
    });
}

const client = ky.create({
    prefix: BASE_URL,
    credentials: 'include',
    retry: 0,
    hooks: {
        afterResponse: [
            async ({ request, response, retryCount }) => {
                if (response.status !== 401 || retryCount > 0) return;

                if (!refreshPromise) {
                    refreshPromise = refreshAccessToken().finally(() => {
                        refreshPromise = null;
                    });
                }

                try {
                    await refreshPromise;
                    return fetch(new Request(request, { credentials: 'include' }));
                } catch {
                    return response;
                }
            },
        ],
    },
});

export default client;
