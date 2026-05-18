import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  title: string;
  tags: string[];
  image?: string;
  href?: string;
}

export default function ProjectCard({ title, tags, href }: ProjectCardProps) {
  const inner = (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        <div className={styles.placeholder} />
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
    return <a href={href} target="_blank" rel="noreferrer">{inner}</a>;
  }

  return inner;
}
