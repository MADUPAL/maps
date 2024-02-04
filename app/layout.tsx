import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Header from './components/header';
import HeaderMobile from './components/header-mobile';
import SideNav from './components/side-nav';
import PageWrapper from './components/page-wrapper';
import MarginWidthWrapper from './components/margin-width-wrapper';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className='flex'>
          <SideNav />
          <main className="flex-1">
            <MarginWidthWrapper>
            <Header />
            <HeaderMobile />
            {children}
            </MarginWidthWrapper>
          </main>
        </div>
      </body>
    </html>
  );
}
