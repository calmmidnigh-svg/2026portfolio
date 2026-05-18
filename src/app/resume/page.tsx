import GNB from '@/components/GNB';
import Footer from '@/components/Footer';
import styles from './page.module.scss';

export default function ResumePage() {
  return (
    <>
      <GNB />
      <div className={styles.page}>
        <div className={styles.content}>

          <div className={styles.pdfBlock}>
            <div className={styles.pdfMeta}>
              <span className={styles.pdfLabel}>이력서 1</span>
              <a href="/resume-1.pdf" download className={styles.downloadBtn}>Download</a>
            </div>
            <iframe src="/resume-1.pdf" className={styles.pdfViewer} title="이력서 1" />
          </div>

          <div className={styles.pdfBlock}>
            <div className={styles.pdfMeta}>
              <span className={styles.pdfLabel}>이력서 2</span>
              <a href="/resume-2.pdf" download className={styles.downloadBtn}>Download</a>
            </div>
            <iframe src="/resume-2.pdf" className={styles.pdfViewer} title="이력서 2" />
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
