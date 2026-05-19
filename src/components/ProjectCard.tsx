import Link from 'next/link';
import Image from 'next/image';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  title: string;
  tags: string[];
  image?: string;
  href?: string;
}

export default function ProjectCard({ title, tags, image, href }: ProjectCardProps) {
  const inner = (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        {image ? (
          <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} unoptimized />
        ) : (
          <div className={styles.placeholder} />
        )}
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <div className={styles.tags}>
          {tags.map((tag, i) => (
            <span key={i} className={styles.tag}>
              {i > 0 && '· '}
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{inner}</Link>;
  }

  return inner;
}
