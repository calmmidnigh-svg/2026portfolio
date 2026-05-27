'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './WorkImageGallery.module.scss';

type ImageItemType = {
  src: string;
  alt: string;
};

type WorkImageGalleryProps = {
  images: ImageItemType[];
};

const WorkImageGallery = ({ images }: WorkImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleSelectImage = (index: number) => {
    setCurrentIndex(index);
  };

  const handleOpenOverlay = () => {
    setIsOverlayOpen(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };

  const handleStopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOverlayOpen(false);
    };

    if (isOverlayOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOverlayOpen]);

  return (
    <>
      <div className={styles.gallery}>
        <div className={styles.thumbnails}>
          {images.map((image, index) => (
            <button
              key={image.src}
              className={`${styles.thumbnailButton} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => handleSelectImage(index)}
              aria-label={image.alt}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </button>
          ))}
        </div>
        <div className={styles.mainImage} onClick={handleOpenOverlay}>
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            style={{ objectFit: 'cover' }}
            unoptimized
          />
        </div>
      </div>

      {isOverlayOpen && (
        <div className={styles.overlay} onClick={handleCloseOverlay}>
          <button className={styles.closeButton} onClick={handleCloseOverlay} aria-label="닫기">✕</button>
          <div className={styles.overlayImageWrapper} onClick={handleStopPropagation}>
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              style={{ objectFit: 'contain' }}
              unoptimized
            />
          </div>
        </div>
      )}
    </>
  );
};

export default WorkImageGallery;
