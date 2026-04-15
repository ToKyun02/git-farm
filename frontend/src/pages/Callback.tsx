import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function Callback() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const access = searchParams.get('access');
        const refresh = searchParams.get('refresh');

        if (access && refresh) {
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);
        }

        navigate('/', { replace: true });
    }, [searchParams, navigate]);

    return <p>로그인 처리 중...</p>;
}

export default Callback;
