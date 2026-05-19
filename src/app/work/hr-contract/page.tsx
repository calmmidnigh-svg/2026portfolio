import Link from 'next/link';
import Image from 'next/image';
import GNB from '@/components/GNB';
import Footer from '@/components/Footer';
import styles from './page.module.scss';

export default function HRContractPage() {
  return (
    <>
      <GNB />
      <div className={styles.page}>

        {/* Header */}
        <div className={styles.header}>
          <Link href="/" className={styles.back}>← 전체 작업</Link>
          <p className={styles.meta}>B2B SaaS · 헬로인사 · Product Designer</p>
          <h1 className={styles.title}>HR전자계약서</h1>
          <table className={styles.overviewTable}>
            <tbody>
              <tr><td>역할</td><td>전체 플로우 설계 + 화면 디자인 + 정책 설계</td></tr>
              <tr><td>상태</td><td>출시 완료</td></tr>
              <tr><td>기간</td><td>디자인 시스템 적용 후 6개월 내 출시</td></tr>
            </tbody>
          </table>
        </div>

        {/* Hero — 실제 제품 스크린샷 */}
        <div className={styles.imageFull} style={{ overflow: 'hidden', position: 'relative' }}>
          <Image src="/images/contract_main.png" alt="HR전자계약서 화면" fill style={{ objectFit: 'cover' }} quality={100} />
        </div>

        <div className={styles.container}>

          {/* Body — Problem + 핵심결정 */}
          <div className={styles.body}>

            {/* 문제정의 */}
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>문제정의</p>
              </div>
              <div className={styles.sectionContent}>
                <p className={styles.subHeading}>비즈니스 목표</p>
                <p className={styles.text}>
                  회사의 신규 B2B SaaS 사업으로, 모든 고객사에게 표준화된 형식의 전자계약서를 제공하는 서비스를 처음부터 설계해야 했습니다.
                </p>
                <p className={styles.subHeading}>핵심 UX 과제</p>
                <p className={styles.text}>계약서라는 도메인은 구조적으로 두 가지 상충되는 니즈를 가집니다.</p>
                <p className={styles.text}>
                  <strong>작성자 입장</strong>{` — 계약서를 빠르고 간단하게 작성`}<br />
                  <strong>수신자 입장</strong>{` — 계약 내용의 모든 디테일이 정확하게 담긴 문서가 필요`}
                </p>
                <p className={styles.text}>
                  기존 방식대로라면 작성 화면에서도 모든 세부 내용을 입력해야 해 복잡도가 매우 높아지는 문제가 있었습니다.
                </p>
                <p className={styles.subHeading}>추가 제약</p>
                <ul className={styles.bullets}>
                  <li>명확한 요구사항 없이 큰 비즈니스 로직만 존재하는 상태에서 출발</li>
                  <li>고객사마다 다른 정보 구조를 수용해야 하는 확장성 필요</li>
                </ul>
              </div>
            </div>

            {/* 핵심 결정 */}
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>핵심 결정</p>
              </div>
              <div className={styles.sectionContent}>
                <p className={styles.sectionTitle}>태그 추상화 시스템</p>
                <p className={styles.text}>복잡성을 해결하기 위해 태그 기반 추상화 방식을 설계했습니다.</p>
                <div className={styles.codeBlock}>{`계약서 작성 시  →  태그만 표시\n실제 출력 시    →  태그가 디테일 내용으로 자동 치환`}</div>
                <ul className={styles.bullets}>
                  <li>관리자가 태그를 정의하고 각 태그에 세부 내용을 연동</li>
                  <li>작성 시 태그만 삽입 — 복잡한 내용을 직접 입력하지 않아도 됨</li>
                  <li>출력 시 태그가 연동된 디테일 내용으로 자동 변환</li>
                </ul>
              </div>
            </div>

          </div>

          {/* 이미지 */}
          <div className={styles.imageFull}>
            <Image src="/images/contract2.png" alt="HR전자계약서 작업 화면" width={4096} height={1916} style={{ width: '100%', height: 'auto', display: 'block' }} unoptimized />
          </div>

          {/* 작업과정 01 */}
          <div className={styles.body} style={{ paddingTop: 0 }}>
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>작업과정</p>
              </div>
              <div className={styles.sectionContent}>
                <p className={styles.sectionTitle}>기획서 해석 → 플로우 설계</p>
                <p className={styles.text}>
                  전달받은 기획서는 데이터 필드와 정책이 표 형태로 정리된 러프한 문서였습니다. 명확한 요구사항 없이 비즈니스 로직만 존재하는 상태에서 서비스 전체의 디테일을 직접 정의해야 했습니다.
                </p>
              </div>
            </div>
          </div>

          {/* 이미지 */}
          <div className={styles.imageFull} />

          {/* 작업과정 02 */}
          <div className={styles.body} style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div className={styles.section}>
              <div className={styles.sectionSide} />
              <div className={styles.sectionContent}>
                <p className={styles.sectionTitle}>엣지케이스 기반 화면 설계</p>
                <p className={styles.text}>요구사항이 불명확한 상황에서 "이 경우엔 어떻게 되는가"를 스스로 정의하며 화면을 설계했습니다.</p>
                <ul className={styles.bullets}>
                  <li>고객사별 사용 항목이 다를 때 어떻게 표시할 것인가</li>
                  <li>태그가 연동된 데이터가 없을 때의 상태 처리</li>
                  <li>계약서 미리보기와 실제 출력의 차이를 어떻게 사용자에게 전달할 것인가</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 이미지 */}
          <div className={styles.imageFull} />

          {/* 작업과정 03 + 결과 + 회고 */}
          <div className={styles.body}>
            <div className={styles.section}>
              <div className={styles.sectionSide} />
              <div className={styles.sectionContent}>
                <p className={styles.sectionTitle}>HDS 적용</p>
                <p className={styles.text}>
                  설계된 화면에 HDS 컴포넌트를 적용해 일관된 UI로 구현했습니다. 디자인 시스템이 있었기에 화면 수가 많아도 빠르게 완성도를 높일 수 있었습니다.
                </p>
              </div>
            </div>

            {/* 결과 */}
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>결과</p>
              </div>
              <div className={styles.sectionContent}>
                <ul className={styles.bullets}>
                  <li>신규 B2B SaaS 서비스 출시 완료</li>
                  <li>기획서(표 형태) → 전체 플로우 + 화면 정책을 1인이 설계</li>
                  <li>HDS 적용으로 6개월 내 출시 달성</li>
                  <li>태그 시스템으로 작성 복잡도 해소 + 출력 품질 유지</li>
                </ul>
                <div className={styles.highlight}>
                  <p className={styles.highlightLabel}>가장 직접적인 지표</p>
                  <p className={styles.highlightText}>
                    기존 제품은 신규 사용자에게 프로그램 교육만 2달을 할애했습니다. HR전자계약서 출시 이후, <strong>교육 관련 문의가 단 한 건도 들어오지 않았습니다.</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* 회고 */}
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>회고</p>
              </div>
              <div className={styles.sectionContent}>
                <p className={styles.text}>
                  이 프로젝트에서 가장 어려웠던 점은 <strong>명확한 요구사항 없이 서비스의 디테일을 스스로 정의해야 했던 것</strong>이었습니다. 요구사항이 완성된 후 디자인하는 것이 아니라, 디자인을 통해 요구사항을 구체화하는 방식으로 일했습니다.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
