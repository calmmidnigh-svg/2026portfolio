import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>© 2026</span>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/yoonjeong-choi" target="_blank" rel="noreferrer">Linkedin</a>
          <a href="https://vonnepetit.tistory.com" target="_blank" rel="noreferrer">Blog</a>
          <Link href="/resume">Resume</Link>
        </div>
      </div>
    </footer>
  );
}
