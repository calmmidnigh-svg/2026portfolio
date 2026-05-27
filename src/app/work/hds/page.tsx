import Link from 'next/link';
import Image from 'next/image';
import GNB from '@/components/GNB';
import Footer from '@/components/Footer';
import styles from '../hr-contract/page.module.scss';

export default function HDSPage() {
  return (
    <>
      <GNB />
      <div className={styles.page}>

        {/* Header */}
        <div className={styles.header}>
          <Link href="/" className={styles.back}>← 전체 작업</Link>
          <p className={styles.meta}>Design System · 헬로인사 · Product Designer</p>
          <h1 className={styles.title}>HDS 디자인 시스템 구축</h1>
        </div>

        {/* Hero — 실제 이미지 영역 */}
        <div className={styles.imageFull} style={{ overflow: 'hidden', position: 'relative', height: '576px' }}>
          <Image src="/images/hds1.png" alt="HDS 디자인 시스템" fill style={{ objectFit: 'cover' }} unoptimized />
        </div>

        <div className={styles.header} style={{ paddingTop: 0 }}>
          <table className={styles.overviewTable}>
            <tbody>
              <tr><td>Project</td><td>Design System · 헬로인사</td></tr>
              <tr><td>Output</td><td>Design System</td></tr>
              <tr><td>Role</td><td>Product Designer / 100%</td></tr>
              <tr><td>Period</td><td>2025 ~ 현재</td></tr>
            </tbody>
          </table>
        </div>

        <div className={styles.container}>

          {/* Body */}
          <div className={styles.body}>

            {/* 문제정의 */}
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>문제정의</p>
              </div>
              <div className={styles.sectionContent}>
                <p className={styles.subHeading}>도입 전 상황</p>
                <p className={styles.text}>
                  입사 당시 제품 개발은 러프한 기획안만을 기반으로 디자이너 없이 진행되고 있었습니다. 그 결과 다음과 같은 문제들이 복합적으로 발생하고 있었습니다.
                </p>
                <p className={styles.subHeading}>제품 품질 문제</p>
                <ul className={styles.bullets}>
                  <li>90년대 수준의 UI로 사용자를 배려하지 않은 화면 구성</li>
                  <li>버튼, 입력 등 인터랙션에 상태 피드백(로딩, 에러, 성공 등)이 전혀 없어 사용자 신뢰도 저하</li>
                  <li>모든 레이아웃이 파편화되어 화면 간 일관성 없음</li>
                  <li>제품 플로우 추적이 불가능한 수준</li>
                </ul>
                <p className={styles.subHeading}>협업 문제</p>
                <ul className={styles.bullets}>
                  <li>디자이너가 만든 시안과 개발 구현 결과물이 크게 달라 서로 의미 없는 노동 반복</li>
                  <li>디자인 QA 자체가 불가능한 상황</li>
                  <li>앞으로 3~4개 제품이 추가될 예정이었으나 이 구조로는 확장이 불가능</li>
                </ul>
              </div>
            </div>

            {/* 목표 */}
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>목표</p>
              </div>
              <div className={styles.sectionContent}>
                <ul className={styles.bullets}>
                  <li>일관된 사용자 경험 제공</li>
                  <li>디자인-개발 간 커뮤니케이션 비용 절감</li>
                  <li>확장 가능한 컴포넌트 시스템 구축으로 반복 노동 제거</li>
                </ul>
              </div>
            </div>

          </div>

          {/* 이미지 */}
          <div className={styles.imageFull}>
            <Image src="/images/hds2.png" alt="HDS 디자인 시스템 2" width={4096} height={1916} style={{ width: '100%', height: 'auto', display: 'block' }} unoptimized />
          </div>

          {/* 작업과정 */}
          <div className={styles.body} style={{ paddingTop: 0 }}>
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>작업과정</p>
              </div>
              <div className={styles.sectionContent}>
                <p className={styles.sectionTitle}>1. 기반 토큰 설계</p>
                <p className={styles.text}>
                  화면 일관성의 근본 원인인 색상, 타이포, 간격을 먼저 정의했습니다.
                </p>
                <ul className={styles.bullets}>
                  <li><strong>Color</strong> — Primary, Gray, Error, Warning, Success 시스템 정의. 임의 hex 사용 금지</li>
                  <li><strong>Typography</strong> — Pretendard 기반 Display / Heading / Body / Detail 스케일 정의</li>
                  <li><strong>Layout / Spacing</strong> — 4px 베이스 그리드, 반응형 브레이크포인트(Mobile / Tablet / Desktop / Wide) 정의</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 이미지 */}
          <div className={styles.imageFull}>
            <Image src="/images/hds3.png" alt="HDS 디자인 시스템 3" width={4009} height={2979} style={{ width: '100%', height: 'auto', display: 'block' }} unoptimized />
          </div>

          {/* 작업과정 02 */}
          <div className={styles.body} style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div className={styles.section}>
              <div className={styles.sectionSide} />
              <div className={styles.sectionContent}>
                <p className={styles.sectionTitle}>2. 컴포넌트 설계 원칙</p>
                <p className={styles.text}>
                  기존 서비스의 가장 큰 문제였던 <strong>상태 피드백 부재</strong>를 해결하기 위해 모든 컴포넌트에 상태를 정의했습니다.
                </p>
                <ul className={styles.bullets}>
                  <li>default / hover / active / disabled / error 상태를 명확히 구분</li>
                  <li>공통 규칙과 스펙을 유지하면서 확장 가능한 구조로 설계</li>
                  <li>단순 시각 스펙이 아닌 어떤 데이터와 연동되어야 하는지, 인터랙션이 어떻게 동작하는지까지 가이드라인으로 제공</li>
                </ul>
                <p className={styles.subHeading}>구축 컴포넌트 (총 8종 이상)</p>
                <div className={styles.codeBlock}>{`Button · Input · Picker · Table\nRadio/Checkbox · Badge · Infos · Navigation`}</div>
              </div>
            </div>
          </div>

          {/* 이미지 */}
          <div className={styles.imageFull}>
            <Image src="/images/hds4.png" alt="HDS 디자인 시스템 4" width={4096} height={2304} style={{ width: '100%', height: 'auto', display: 'block' }} unoptimized />
          </div>

          {/* 작업과정 03 + 결과 + 회고 */}
          <div className={styles.body}>
            <div className={styles.section}>
              <div className={styles.sectionSide} />
              <div className={styles.sectionContent}>
                <p className={styles.sectionTitle}>3. 개발팀 설득 과정</p>
                <p className={styles.text}>
                  디자인 시스템에 생소한 팀원들에게 초반에는 업무 효율을 증명하기 어려웠습니다. 팀 내 이전 직장에서 디자인 시스템 경험이 있는 개발자와 함께 규칙을 하나씩 맞춰가며 작업 속도가 빨라지는 것을 팀 전체가 체감하도록 했습니다. 일방적인 강요가 아닌 함께 검증하는 방식으로 접근했고, 결과적으로 <strong>초반 사용률 0%에서 현재 80%로 끌어올렸습니다.</strong>
                </p>
              </div>
            </div>

            {/* 결과 */}
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>결과</p>
              </div>
              <div className={styles.sectionContent}>
                <table className={styles.overviewTable}>
                  <tbody>
                    <tr>
                      <td>제품</td>
                      <td>디자인 시스템</td>
                      <td>출시 기간</td>
                    </tr>
                    <tr>
                      <td>휴가관리</td>
                      <td>미적용</td>
                      <td><strong>2년</strong></td>
                    </tr>
                    <tr>
                      <td>HR전자계약서</td>
                      <td>HDS 1.1.1 적용</td>
                      <td><strong>6개월</strong></td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.subHeading}>개발팀 만족도 서베이 결과 (2026년 1월)</p>
                <p className={styles.text}>개발팀 전원을 대상으로 디자인 시스템 만족도 서베이를 진행했습니다.</p>
                <ul className={styles.bullets}>
                  <li>UI 개발 시간 30~40% 절감 (백현지 개발자)</li>
                  <li>UI 개발 시간 50% 절감 (김동원 개발자)</li>
                </ul>
                <div className={styles.highlight}>
                  <p className={styles.highlightLabel}>개발팀 응답</p>
                  <p className={styles.highlightText}>
                    "토큰화를 통해 디자인–개발 간 속성 매핑을 빠르게 정리할 수 있었고, 빈도 높은 UI를 재사용 가능한 컴포넌트로 가져다 쓰는 방식으로 구현 속도가 개선되었다." — 백현지
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
                  디자인 시스템은 혼자 만드는 것이 아니라 함께 쓰게 만드는 것이 핵심이었습니다. 기술적 완성도보다 <strong>팀이 실제로 사용하게 하는 과정</strong>이 가장 어렵고 중요한 작업이었습니다.
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
