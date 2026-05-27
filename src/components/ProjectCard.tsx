import Link from 'next/link';
import Image from 'next/image';
import styles from './ProjectCard.module.scss';

type OverviewType = {
  project: string;
  output: string;
  role: string;
  period: string;
};

interface ProjectCardProps {
  title: string;
  tags: string[];
  image?: string;
  href?: string;
  desc?: string;
  overview?: OverviewType;
}

export default function ProjectCard({ title, image, href, desc, overview }: ProjectCardProps) {
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
        {desc && <p className={styles.desc}>{desc}</p>}
        {overview && (
          <table className={styles.overview}>
            <tbody>
              <tr>
                <td className={styles.overviewLabel}>Project</td>
                <td className={styles.overviewValue}>{overview.project}</td>
              </tr>
              <tr>
                <td className={styles.overviewLabel}>Output</td>
                <td className={styles.overviewValue}>{overview.output}</td>
              </tr>
              <tr>
                <td className={styles.overviewLabel}>Role</td>
                <td className={styles.overviewValue}>{overview.role}</td>
              </tr>
              <tr>
                <td className={styles.overviewLabel}>Period</td>
                <td className={styles.overviewValue}>{overview.period}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{inner}</Link>;
  }

  return inner;
}
