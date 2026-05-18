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
              {`복잡한 비즈니스 문제를 사용자 관점으로 풀고, 그 결과를 시스템으로 확장하는\n프로덕트 디자이너입니다.\n\n제품이 만들어지는 전 과정에 참여합니다. 기획 단계부터 함께 문제를 정의하고,\nAI를 활용한 사용성 검증을 거쳐, 디자인 시스템 기반으로 화면을 만들고, QA까지\n직접 챙깁니다.`}
            </p>
          </div>
          <div className={styles.links}>
            <a href="https://www.linkedin.com/in/yoonjeong-choi" target="_blank" rel="noreferrer" className={styles.link}>
              <Image src="/images/Social Icons.svg" alt="LinkedIn" width={24} height={24} />
              Linkedin
            </a>
            <a href="https://vonnepetit.tistory.com" target="_blank" rel="noreferrer" className={styles.link}>
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
