import logo from '@/assets/logo.png';

const SUPPORT_LINKS = ['문서', 'FAQ', '연락처', '개인정보처리방침'];

export default function Footer() {
    return (
        <footer className='border-border border-t py-10'>
            <div className='mx-auto max-w-4xl px-6'>
                <div className='flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left'>
                    <div className='shrink-0'>
                        <div className='mb-2 flex items-center justify-center gap-2 text-lg font-bold sm:justify-start'>
                            <img src={logo} alt='Git-Farm 로고' className='h-6 w-6' />
                            <span>Git-Farm</span>
                        </div>
                        <p className='text-muted-foreground text-sm'>코드가 마을이 되는 세상</p>
                    </div>

                    <div>
                        <h4 className='mb-3 font-semibold'>지원</h4>
                        <ul className='flex flex-wrap justify-center gap-x-6 gap-y-1.5 sm:flex-col sm:justify-start sm:gap-y-1.5'>
                            {SUPPORT_LINKS.map((link) => (
                                <li key={link}>
                                    <a href='#' className='text-muted-foreground hover:text-foreground text-sm transition-colors'>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='text-muted-foreground border-border mt-8 flex flex-col items-center justify-between gap-3 border-t pt-6 text-sm sm:flex-row'>
                    <p>© 2026 Git-Farm. All rights reserved.</p>
                    <div className='flex gap-4'>
                        <a href='#' className='hover:text-foreground transition-colors'>
                            이용약관
                        </a>
                        <a href='#' className='hover:text-foreground transition-colors'>
                            개인정보처리방침
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
