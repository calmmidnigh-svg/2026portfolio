import Image from 'next/image';
import ChatBot from './ChatBot';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.textGroup}>
            <p className={styles.name}>최윤정</p>
            <p className={styles.title}>프로덕트디자이너</p>
            <p className={styles.desc}>
              {`말보다 먼저 만들어 보여줍니다.\n\n카페에서 즉석 인터뷰로 전체 화면 방향을 바꾼 적 있고, 필요한 도구가 없으면 직접 코딩해서 만듭니다.\n\n문제를 발견하면 권한이 없어도 일단 시도하는 디자이너입니다.`}
            </p>
          </div>
          <div className={styles.links}>
            <a href="https://www.linkedin.com/in/%EC%9C%A4%EC%A0%95-%EC%B5%9C-3a9665380" target="_blank" rel="noreferrer" className={styles.link}>
              <Image src="/images/Social Icons.svg" alt="LinkedIn" width={24} height={24} />
              Linkedin
            </a>
            <a href="https://yvonne-is-well.tistory.com/" target="_blank" rel="noreferrer" className={styles.link}>
              <Image src="/images/sns_Default.svg" alt="Blog" width={24} height={24} />
              Blog
            </a>
          </div>
        </div>

        <div className={styles.right}>
          <ChatBot />
        </div>
      </div>
    </section>
  );
}
