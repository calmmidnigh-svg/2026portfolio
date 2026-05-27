'use client';
import { useEffect, useRef } from 'react';

type AutoPlayVideoProps = {
  src: string;
  style?: React.CSSProperties;
};

const AutoPlayVideo = ({ src, style }: AutoPlayVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      style={style}
    />
  );
};

export default AutoPlayVideo;
