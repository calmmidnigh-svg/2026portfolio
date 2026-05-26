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
              {`복잡한 걸 단순하게 만드는 걸 좋아합니다.\n\n디자인 시스템을 만들어서 팀 출시 사이클을 2년에서 6개월로 줄였습니다. 컴포넌트를 쌓은 게 아니라, 팀이 같은 언어로 일할 수 있는 기준을 만든 것이었습니다.\n\n제한된 상황에서도 사용자와의 접점을 찾습니다. 기획부터 QA까지 직접 챙기고, AI는 빠른 검증 도구로 활용합니다.\n\n디자이너는 비즈니스 협력자로서, 문제를 제대로 정의하는 것이 가장 중요한 역할이라고 생각합니다.`}            </p>
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
