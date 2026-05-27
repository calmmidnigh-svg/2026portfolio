import GNB from '@/components/GNB';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import styles from './page.module.scss';

const PROJECTS = [
  {
    title: 'HR전자계약서',
    tags: ['B2B SaaS', '헬로인사'],
    image: '/images/contract_main.png',
    href: '/work/hr-contract',
    overview: {
      project: 'B2B SaaS · 헬로인사',
      output: 'Web',
      role: 'Product Designer / 100%',
      period: '2025.06 ~ 2025.11',
    },
  },
  {
    title: '디자인시스템 구축',
    tags: ['Design System'],
    image: '/images/hds1.png',
    href: '/work/hds',
    overview: {
      project: 'Design System · 헬로인사',
      output: 'Design System',
      role: 'Product Designer / 100%',
      period: '2025 ~ 현재',
    },
  },
  {
    title: 'AI VOC 대시보드',
    tags: ['AI', 'Vibe Coding'],
    image: '/images/voc1.png',
    href: '/work/voc',
    overview: {
      project: 'AI Dashboard · 헬로인사',
      output: 'Web',
      role: 'Product Designer / 100%',
      period: '2026.05',
    },
  },
  {
    title: '지식 공유 강의 플랫폼',
    tags: ['Side Project', 'UX Research'],
    image: '/images/unretired1.png',
    href: '/work/unretired',
    overview: {
      project: 'Side Project',
      output: 'iOS · Android · Web',
      role: 'Product Designer / 100%',
      period: '2024.12 ~ 2025.07',
    },
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
