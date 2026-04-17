import client from '@/utils/clientHelper';

export type UserMe = {
    username: string;
};

export function login() {
    window.location.href = `${import.meta.env.VITE_BASE_URL}/api/auth/login/`;
}

export async function logout() {
    return await client.post('api/auth/logout/');
}

export async function me() {
    return await client.get('api/auth/me/').json<UserMe>();
}
