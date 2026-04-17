import { login, logout, me, type UserMe } from '@/apis/auth';
import { useEffect, useState } from 'react';

export default function LoginPage() {
    const [user, setUser] = useState<UserMe | null>(null);

    useEffect(() => {
        me()
            .then((data) => setUser(data))
            .catch(() => setUser(null));
    }, []);

    const handleLogout = async () => {
        await logout();
        setUser(null);
    };

    return (
        <div className='bg-background flex min-h-screen items-center justify-center'>
            {user ? (
                <div className='flex flex-col items-center gap-4'>
                    <p className='text-foreground font-semibold'>로그인 완료!</p>
                    <div className='text-muted-foreground text-sm'>
                        <p>username: {user.username}</p>
                    </div>
                    <button onClick={handleLogout}>로그아웃</button>
                </div>
            ) : (
                <button onClick={login}>GitHub로 로그인</button>
            )}
        </div>
    );
}
