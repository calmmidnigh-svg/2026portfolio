'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './GNB.module.scss';

export default function GNB() {
  const pathname = usePathname();

  const isWorkPage = pathname.startsWith('/work/');

  return (
    <header className={styles.gnb}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>Choi Yunjeong</Link>
        {!isWorkPage && (
          <nav className={styles.nav}>
            <Link href="/" className={`${styles.navItem} ${pathname === '/' ? styles.active : ''}`}>
              포트폴리오
            </Link>
            <Link href="/resume" className={`${styles.navItem} ${pathname === '/resume' ? styles.active : ''}`}>
              이력서
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
