'use client';

import dynamic from 'next/dynamic';
import GNB from '@/components/GNB';
import Footer from '@/components/Footer';
import styles from './page.module.scss';

const PDFViewer = dynamic(() => import('./PDFViewer'), { ssr: false });

export default function ResumePage() {
  const handleDownloadAll = () => {
    const files = ['/resume-1.pdf', '/resume-2.pdf'];
    files.forEach((file, i) => {
      setTimeout(() => {
        const a = document.createElement('a');
        a.href = file;
        a.download = file.split('/').pop() ?? file;
        a.click();
      }, i * 300);
    });
  };

  return (
    <>
      <GNB />
      <div className={styles.page}>
        <div className={styles.topBar}>
          <button onClick={handleDownloadAll} className={styles.downloadBtn}>Download</button>
        </div>
        <div className={styles.content}>
          <PDFViewer file="/resume-1.pdf" />
          <PDFViewer file="/resume-2.pdf" />
        </div>
      </div>
      <Footer />
    </>
  );
}
