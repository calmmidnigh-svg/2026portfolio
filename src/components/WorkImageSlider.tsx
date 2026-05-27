'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './WorkImageSlider.module.scss';

type ImageItemType = {
  src: string;
  alt: string;
};

type WorkImageSliderProps = {
  images: ImageItemType[];
};

const WorkImageSlider = ({ images }: WorkImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.slider}>
      <div className={styles.imageWrapper}>
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          style={{ objectFit: 'cover' }}
          unoptimized
        />
      </div>
      <button className={styles.buttonPrev} onClick={handlePrevious} aria-label="이전 이미지">
        ←
      </button>
      <button className={styles.buttonNext} onClick={handleNext} aria-label="다음 이미지">
        →
      </button>
      <span className={styles.counter}>{currentIndex + 1} / {images.length}</span>
    </div>
  );
};

export default WorkImageSlider;
