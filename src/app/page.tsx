import GNB from '@/components/GNB';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import styles from './page.module.scss';

const PROJECTS = [
  {
    title: 'HR전자계약서',
    tags: ['B2B SaaS', '헬로인사'],
    image: '/images/hr-contract.png',
    href: '/work/hr-contract',
  },
  {
    title: '디자인시스템 구축',
    tags: ['Design System', 'Solo'],
    image: '/images/hds.png',
    href: '/work/hds',
  },
  {
    title: 'AI VOC 대시보드',
    tags: ['AI', 'Vibe Coding'],
    image: '/images/voc.png',
    href: '/work/voc',
  },
  {
    title: '지식 공유 강의 플랫폼',
    tags: ['Side Project', 'UX Research'],
    image: '/images/unretired.png',
    href: '/work/unretired',
  },
];

export default function Home() {
  return (
    <>
      <GNB />
      <main>
        <Hero />
        <section className={styles.projects}>
          <div className={styles.projectList}>
            {PROJECTS.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
