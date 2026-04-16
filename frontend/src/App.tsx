import ky from 'ky';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
function MainPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        ky.get('http://localhost:8000/api/auth/me/', { credentials: 'include' })
            .then(() => setIsLoggedIn(true))
            .catch(() => setIsLoggedIn(false));
    }, []);

    // 로그인 버튼 클릭 → 백엔드 OAuth URL로 이동
    const handleLogin = () => {
        window.location.href = 'http://localhost:8000/api/auth/login/';
    };

    // 로그아웃 버튼 클릭 → 토큰 삭제 후 새로고침
    const handleLogout = async () => {
        await ky.post('http://localhost:8000/api/auth/logout/', { credentials: 'include' });
        window.location.reload();
    };

    // 로그인 여부에 따라 다른 버튼 표시
    return (
        <div>
            <h1>Git Farm</h1>
            {isLoggedIn ? (
                <div>
                    <p>로그인 완료!</p>
                    <button onClick={handleLogout}>로그아웃</button>
                </div>
            ) : (
                <button onClick={handleLogin}>GitHub로 로그인</button>
            )}
        </div>
    );
}

function App() {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
        </Routes>
    );
}

export default App;
