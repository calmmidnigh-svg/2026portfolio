'use client';

import dynamic from 'next/dynamic';
import GNB from '@/components/GNB';
import Footer from '@/components/Footer';
import styles from './page.module.scss';

const PDFViewer = dynamic(() => import('./PDFViewer'), { ssr: false });

export default function ResumePage() {
  const handleDownloadAll = () => {
    const a = document.createElement('a');
    a.href = '/resume.pdf';
    a.download = '이력서.pdf';
    a.click();
  };

  return (
    <>
      <GNB />
      <div className={styles.page}>
        <div className={styles.topBar}>
          <button onClick={handleDownloadAll} className={styles.downloadBtn}>Download</button>
        </div>
        <div className={styles.content}>
          <PDFViewer file="/resume.pdf" />
        </div>
      </div>
      <Footer />
    </>
  );
}
