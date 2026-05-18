import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Vonnepetit — 최윤정',
  description: '프로덕트 디자이너 최윤정의 포트폴리오입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
