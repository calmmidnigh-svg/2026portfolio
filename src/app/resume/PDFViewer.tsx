'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import styles from './PDFViewer.module.scss';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface Props {
  file: string;
  label: string;
}

export default function PDFViewer({ file, label }: Props) {
  const [numPages, setNumPages] = useState<number>(0);

  return (
    <div className={styles.block}>
      <div className={styles.meta}>
        <span className={styles.label}>{label}</span>
        <a href={file} download className={styles.download}>Download</a>
      </div>
      <Document
        file={file}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        className={styles.document}
      >
        {Array.from({ length: numPages }, (_, i) => (
          <Page
            key={i + 1}
            pageNumber={i + 1}
            width={812}
            className={styles.pdfPage}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        ))}
      </Document>
    </div>
  );
}
