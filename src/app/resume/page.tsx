import GNB from '@/components/GNB';
import Footer from '@/components/Footer';
import styles from './page.module.scss';

export default function ResumePage() {
  return (
    <>
      <GNB />
      <div className={styles.page}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1 className={styles.name}>최윤정</h1>
            <p className={styles.contact}>btjung1009@naver.com · 010-8489-2248</p>
          </div>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>

            <div className={styles.item}>
              <span className={styles.period}>2025.06 — 현재</span>
              <div className={styles.itemContent}>
                <p className={styles.company}>헬로인사</p>
                <p className={styles.role}>Product Designer</p>
                <ul className={styles.bullets}>
                  <li className={styles.bullet}>HDS 1.1.1 디자인 시스템 솔로 구축 — UI 개발 시간 30~50% 단축</li>
                  <li className={styles.bullet}>HR전자계약서 제품 디자인 — 출시 후 교육 관련 VOC 0건</li>
                  <li className={styles.bullet}>VOC 대시보드 기획·구현 (Gemini API + Rocket.Chat) — 분류 정확도 75%</li>
                </ul>
              </div>
            </div>

            <div className={styles.item}>
              <span className={styles.period}>2023.04 — 2025.01</span>
              <div className={styles.itemContent}>
                <p className={styles.company}>가우스랩</p>
                <p className={styles.role}>Product Designer</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Side Project</h2>
            <div className={styles.item}>
              <span className={styles.period}>2024.12 — 2025.06</span>
              <div className={styles.itemContent}>
                <p className={styles.company}>언리타이얼드</p>
                <p className={styles.role}>Co-founder · Designer</p>
                <ul className={styles.bullets}>
                  <li className={styles.bullet}>중장년층(40-50대) 지식 공유 플랫폼 기획·디자인</li>
                  <li className={styles.bullet}>카페 즉석 인터뷰로 다크모드 → 라이트모드 전환 결정</li>
                  <li className={styles.bullet}>웨비나 MVP 운영으로 초기 수요 검증</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Education</h2>
            <div className={styles.item}>
              <span className={styles.period}>2025 —</span>
              <div className={styles.itemContent}>
                <p className={styles.company}>서울디지털대학교</p>
                <p className={styles.role}>디자인학과 재학</p>
              </div>
            </div>
            <div className={styles.item}>
              <span className={styles.period}>2014 — 2016</span>
              <div className={styles.itemContent}>
                <p className={styles.company}>용인송담대학교</p>
                <p className={styles.role}>세무회계학과</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <div className={styles.skills}>
              {[
                'Figma', '디자인 시스템', 'UX 리서치', '프로토타이핑',
                'Claude Code', 'Gemini API', '바이브 코딩',
                'Next.js', 'React', 'TypeScript', 'SCSS',
              ].map(s => (
                <span key={s} className={styles.skill}>{s}</span>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
