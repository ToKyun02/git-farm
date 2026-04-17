import router from '@/router';
import { ThemeProvider } from 'next-themes';
import { RouterProvider } from 'react-router-dom';

const App = () => (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <RouterProvider router={router} />
    </ThemeProvider>
);

export default App;
