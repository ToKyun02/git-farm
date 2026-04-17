import ky from 'ky';

const client = ky.create({
    prefix: import.meta.env.VITE_BASE_URL,
    credentials: 'include',
});

export default client;
