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
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
              </svg>
              Linkedin
            </a>
            <a href="https://vonnepetit.tistory.com" target="_blank" rel="noreferrer" className={styles.link}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
              </svg>
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
