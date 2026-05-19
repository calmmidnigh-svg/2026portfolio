'use client';

import { useState } from 'react';
import ChatBot from './ChatBot';
import styles from './FloatingChat.module.scss';

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      {isOpen && (
        <>
          <div className={styles.backdrop} onClick={() => setIsOpen(false)} />
          <div className={styles.sheet}>
            <div className={styles.sheetHeader}>
              <span className={styles.sheetTitle}>저에대해 궁금한 점을 물어보세요</span>
              <button className={styles.closeBtn} onClick={() => setIsOpen(false)} aria-label="닫기">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className={styles.sheetBody}>
              <ChatBot />
            </div>
          </div>
        </>
      )}

      <button
        className={styles.fab}
        onClick={() => setIsOpen(prev => !prev)}
        aria-label="채팅 열기"
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        )}
      </button>
    </div>
  );
}
