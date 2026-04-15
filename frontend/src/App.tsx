import { Route, Routes } from 'react-router-dom';
import Callback from './pages/Callback';

function MainPage() {
    // localStorage에 토큰이 있으면 로그인 상태로 판단
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));

    // 로그인 버튼 클릭 → 백엔드 OAuth URL로 이동
    const handleLogin = () => {
        window.location.href = 'http://localhost:8000/api/auth/social/login/github/';
    };

    // 로그아웃 버튼 클릭 → 토큰 삭제 후 새로고침
    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
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
            <Route path='/callback' element={<Callback />} />
        </Routes>
    );
}

export default App;
