import Link from 'next/link';
import GNB from '@/components/GNB';
import Footer from '@/components/Footer';
import styles from './page.module.scss';

export default function HRContractPage() {
  return (
    <>
      <GNB />
      <div className={styles.page}>
        <div className={styles.content}>

          <Link href="/" className={styles.back}>← 전체 작업</Link>

          {/* Hero */}
          <div className={styles.hero}>
            <p className={styles.tag}>B2B SaaS · 헬로인사</p>
            <h1 className={styles.title}>HR전자계약서</h1>
            <div className={styles.imageArea} />
            <table className={styles.overview}>
              <tbody>
                <tr><td>역할</td><td>전체 플로우 설계 + 화면 디자인 + 정책 설계</td></tr>
                <tr><td>상태</td><td>출시 완료</td></tr>
                <tr><td>적용 시스템</td><td>HDS 1.1.1</td></tr>
                <tr><td>출시 기간</td><td>6개월 (디자인 시스템 적용 후)</td></tr>
              </tbody>
            </table>
          </div>

          {/* Problem */}
          <section className={styles.section}>
            <p className={styles.sectionLabel}>Problem</p>
            <div className={styles.section}>
              <p className={styles.subTitle}>비즈니스 목표</p>
              <p className={styles.body}>
                회사의 신규 B2B SaaS 사업으로, 모든 고객사에게 표준화된 형식의 전자계약서를 제공하는 서비스를 처음부터 설계해야 했다.
              </p>
            </div>
            <div className={styles.section}>
              <p className={styles.subTitle}>핵심 UX 과제</p>
              <p className={styles.body}>계약서라는 도메인은 구조적으로 두 가지 상충되는 니즈를 가진다.</p>
              <div className={styles.bullets}>
                <p className={styles.bullet}><strong>작성자 입장</strong> — 계약서를 빠르고 간단하게 작성하고 싶다</p>
                <p className={styles.bullet}><strong>수신자 입장</strong> — 계약 내용의 모든 디테일이 정확하게 담긴 문서가 필요하다</p>
              </div>
              <p className={styles.body}>기존 방식대로라면 작성 화면에서도 모든 세부 내용을 입력해야 해 복잡도가 매우 높아지는 문제가 있었다.</p>
            </div>
            <div className={styles.section}>
              <p className={styles.subTitle}>추가 제약</p>
              <div className={styles.bullets}>
                <p className={styles.bullet}>명확한 요구사항 없이 큰 비즈니스 로직만 존재하는 상태에서 출발</p>
                <p className={styles.bullet}>고객사마다 다른 정보 구조를 수용해야 하는 확장성 필요</p>
              </div>
            </div>
          </section>

          {/* Key Decision */}
          <section className={styles.section}>
            <p className={styles.sectionLabel}>핵심 UX 결정</p>
            <h2 className={styles.sectionTitle}>태그 추상화 시스템</h2>
            <p className={styles.body}>복잡성을 해결하기 위해 태그 기반 추상화 방식을 설계했다.</p>
            <div className={styles.codeBlock}>{`계약서 작성 시  →  태그만 표시        (단순하고 빠른 작성 경험)\n실제 출력 시    →  태그가 디테일한 내용으로 치환  (완전한 계약 문서)`}</div>
            <div className={styles.bullets}>
              <p className={styles.bullet}>관리자가 태그를 정의하고 각 태그에 세부 내용을 연동</p>
              <p className={styles.bullet}>계약서 작성 시에는 태그만 삽입 — 작성자는 복잡한 내용을 직접 입력하지 않아도 됨</p>
              <p className={styles.bullet}>출력 시 태그가 연동된 디테일 내용으로 자동 변환</p>
            </div>
            <p className={styles.body}>이 결정으로 작성 복잡도를 낮추면서도 출력 품질은 유지할 수 있었다.</p>
          </section>

          {/* Process */}
          <section className={styles.section}>
            <p className={styles.sectionLabel}>Process</p>
            <div className={styles.section}>
              <div className={styles.step}>
                <p className={styles.stepNum}>01</p>
                <h3 className={styles.sectionTitle}>기획서 해석 → 플로우 설계</h3>
              </div>
              <p className={styles.body}>
                전달받은 기획서는 데이터 필드와 정책이 표 형태로 정리된 러프한 문서였다. 명확한 요구사항 없이 비즈니스 로직만 존재하는 상태에서 서비스 전체의 디테일을 직접 정의해야 했다.
              </p>
              <div className={styles.imageArea} />
            </div>
            <div className={styles.section}>
              <div className={styles.step}>
                <p className={styles.stepNum}>02</p>
                <h3 className={styles.sectionTitle}>엣지케이스 기반 화면 설계</h3>
              </div>
              <p className={styles.body}>요구사항이 불명확한 상황에서 "이 경우엔 어떻게 되는가"를 스스로 정의하며 화면을 설계했다.</p>
              <div className={styles.bullets}>
                <p className={styles.bullet}>고객사별 사용 항목이 다를 때 어떻게 표시할 것인가</p>
                <p className={styles.bullet}>태그가 연동된 데이터가 없을 때의 상태 처리</p>
                <p className={styles.bullet}>계약서 미리보기와 실제 출력의 차이를 어떻게 사용자에게 전달할 것인가</p>
              </div>
              <div className={styles.imageArea} />
            </div>
            <div className={styles.section}>
              <div className={styles.step}>
                <p className={styles.stepNum}>03</p>
                <h3 className={styles.sectionTitle}>HDS 적용</h3>
              </div>
              <p className={styles.body}>
                설계된 화면에 HDS 컴포넌트를 적용해 일관된 UI로 구현. 디자인 시스템이 있었기에 화면 수가 많아도 빠르게 완성도를 높일 수 있었다.
              </p>
              <div className={styles.imageArea} />
            </div>
          </section>

          {/* Result */}
          <section className={styles.section}>
            <p className={styles.sectionLabel}>Result</p>
            <div className={styles.bullets}>
              <p className={styles.bullet}>신규 B2B SaaS 서비스 출시 완료</p>
              <p className={styles.bullet}>기획서(표 형태) → 전체 플로우 + 화면 정책을 1인이 설계</p>
              <p className={styles.bullet}>HDS 적용으로 6개월 내 출시 달성</p>
              <p className={styles.bullet}>태그 시스템으로 작성 복잡도 해소 + 출력 품질 유지</p>
            </div>
            <div className={styles.highlight}>
              <p className={styles.highlightLabel}>가장 직접적인 지표</p>
              <p className={styles.highlightText}>
                기존 회사 제품은 신규 사용자에게 프로그램 교육만 2달을 할애하고 있었습니다.<br />
                HR전자계약서 출시 이후, <strong>교육 관련 문의가 단 한 건도 들어오지 않았습니다.</strong>
              </p>
              <p className={styles.body}>
                사용자가 헤매지 않았다는 것이 곧 UX가 성공했다는 증거입니다. 제품이 스스로 설명하는 수준은, 디자인이 선제적으로 사용자의 문제를 풀었을 때 가능합니다.
              </p>
            </div>
          </section>

          {/* Retrospective */}
          <section className={styles.section}>
            <p className={styles.sectionLabel}>회고</p>
            <p className={styles.body}>
              이 프로젝트에서 가장 어려웠던 점은 <strong>명확한 요구사항 없이 서비스의 디테일을 스스로 정의해야 했던 것</strong>이다. 비즈니스 로직만 주어진 상태에서 사용자 시나리오를 직접 만들고, 발생 가능한 엣지케이스를 미리 정의해 화면 정책으로 만들어가는 과정이었다.
            </p>
            <p className={styles.body}>
              요구사항이 완성된 후 디자인하는 것이 아니라, 디자인을 통해 요구사항을 구체화하는 방식으로 일했다.
            </p>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
}
