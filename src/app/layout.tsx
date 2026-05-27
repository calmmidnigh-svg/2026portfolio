import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import FloatingChat from '@/components/FloatingChat';
import './globals.scss';

export const metadata: Metadata = {
  title: '최윤정 | 프로덕트 디자이너',
  description: '프로덕트 디자이너 최윤정의 포트폴리오입니다.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: '최윤정 | 프로덕트 디자이너',
    description: '프로덕트 디자이너 최윤정의 포트폴리오입니다.',
    url: 'https://2026portfolio-choiyunjeong.vercel.app',
    siteName: '최윤정 포트폴리오',
    images: [
      {
        url: 'https://2026portfolio-choiyunjeong.vercel.app/images/hds1.png',
        width: 1200,
        height: 630,
        alt: '최윤정 프로덕트 디자이너 포트폴리오',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '최윤정 | 프로덕트 디자이너',
    description: '프로덕트 디자이너 최윤정의 포트폴리오입니다.',
    images: ['https://2026portfolio-choiyunjeong.vercel.app/images/hds1.png'],
  },
};


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {children}
        <FloatingChat />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window,document,"clarity","script","wtcp3zrb2z");`}
        </Script>
      </body>
    </html>
  );
}
