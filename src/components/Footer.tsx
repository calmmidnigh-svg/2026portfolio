import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>© 2026</span>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/%EC%9C%A4%EC%A0%95-%EC%B5%9C-3a9665380" target="_blank" rel="noreferrer">Linkedin</a>
          <a href="https://yvonne-is-well.tistory.com/" target="_blank" rel="noreferrer">Blog</a>
          <Link href="/resume">Resume</Link>
        </div>
      </div>
    </footer>
  );
}
