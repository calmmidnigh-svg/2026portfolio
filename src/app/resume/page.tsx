import GNB from '@/components/GNB';
import Footer from '@/components/Footer';
import PDFViewer from './PDFViewer';
import styles from './page.module.scss';

export default function ResumePage() {
  return (
    <>
      <GNB />
      <div className={styles.page}>
        <div className={styles.content}>
          <PDFViewer file="/resume-1.pdf" label="이력서 1" />
          <PDFViewer file="/resume-2.pdf" label="이력서 2" />
        </div>
      </div>
      <Footer />
    </>
  );
}
