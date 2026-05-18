'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './GNB.module.scss';

export default function GNB() {
  const pathname = usePathname();

  return (
    <header className={styles.gnb}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>Vonnepetit</Link>
        <nav className={styles.nav}>
          <Link href="/" className={`${styles.navItem} ${pathname === '/' ? styles.active : ''}`}>
            작업
          </Link>
          <Link href="/resume" className={`${styles.navItem} ${pathname === '/resume' ? styles.active : ''}`}>
            이력서
          </Link>
        </nav>
      </div>
    </header>
  );
}
