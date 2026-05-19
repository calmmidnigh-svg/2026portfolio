import type { Metadata, Viewport } from 'next';
import FloatingChat from '@/components/FloatingChat';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Vonnepetit — 최윤정',
  description: '프로덕트 디자이너 최윤정의 포트폴리오입니다.',
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
      </body>
    </html>
  );
}
