'use client';
import Image from 'next/image';
import { useState } from 'react';
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

  const handleSelectImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
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
      <div className={styles.mainImage}>
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          style={{ objectFit: 'cover' }}
          unoptimized
        />
      </div>
    </div>
  );
};

export default WorkImageGallery;
