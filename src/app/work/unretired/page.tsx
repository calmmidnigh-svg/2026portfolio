import Link from 'next/link';
import GNB from '@/components/GNB';
import Footer from '@/components/Footer';
import styles from '../hr-contract/page.module.scss';

export default function UnretiredPage() {
  return (
    <>
      <GNB />
      <div className={styles.page}>

        {/* Header */}
        <div className={styles.header}>
          <Link href="/" className={styles.back}>← 전체 작업</Link>
          <p className={styles.meta}>Side Project · UX Research · Product Designer</p>
          <h1 className={styles.title}>언리타이얼드</h1>
          <table className={styles.overviewTable}>
            <tbody>
              <tr><td>역할</td><td>서비스 기획 및 UX 설계, 핵심 화면 설계</td></tr>
              <tr><td>기간</td><td>2024.12 ~ 2025.07</td></tr>
              <tr><td>결과물</td><td>iOS / Android 앱, 웹 어드민</td></tr>
            </tbody>
          </table>
        </div>

        {/* Hero — 이미지 영역 */}
        <div className={styles.imageFull} style={{ overflow: 'hidden' }}>
          <div style={{ width: '100%', height: '100%', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#999', fontSize: '14px' }}>언리타이얼드 대표 이미지</span>
          </div>
        </div>

        <div className={styles.container}>

          <div className={styles.body}>

            {/* 문제정의 */}
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>문제정의</p>
              </div>
              <div className={styles.sectionContent}>
                <p className={styles.subHeading}>이런 서비스예요</p>
                <p className={styles.text}>
                  만 52.8세에 퇴직하는 대한민국에서, 69.4%의 시니어가 여전히 일하고 싶어합니다. 언리타이얼드는 이 고경력자들의 경험을 강의로 연결하고, 신입과 학습자들이 배울 수 있게 하는 지식 순환 플랫폼입니다.
                </p>
                <p className={styles.subHeading}>투입됐을 때 상황</p>
                <p className={styles.text}>초기 MVP가 있는 상태에서 중간에 합류했습니다. 세 가지 문제가 눈에 띄었습니다.</p>
                <ul className={styles.bullets}>
                  <li><strong>화면이 엉망이었다</strong> — 화면 간 일관성이 없었고, 엣지케이스가 정의되지 않아 개발 구현이 안 될 것 같은 상태</li>
                  <li><strong>수강생을 모르는 채로 만들고 있었다</strong> — 강사진에 대한 니즈는 있었지만, 콘텐츠를 소비할 수강생이 무엇을 원하는지 파악 없음</li>
                  <li><strong>콘텐츠가 너무 적었다</strong> — 초기 서비스라 콘텐츠 수가 적었고, 그대로 노출하면 서비스가 빈약해 보일 게 분명했음</li>
                </ul>
              </div>
            </div>

            {/* 수요 검증 */}
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>핵심 결정</p>
              </div>
              <div className={styles.sectionContent}>
                <p className={styles.sectionTitle}>화면 전에 수요부터 확인했어요</p>
                <p className={styles.text}>수강생 니즈를 모르는 채로 화면을 만드는 건 의미가 없다고 판단했습니다.</p>
                <p className={styles.subHeading}>가설</p>
                <p className={styles.text}>정년퇴직 고경력자의 경험을 강의로 제공하면, 학습자들이 실제로 원할 것입니다.</p>
                <p className={styles.subHeading}>검증 방법</p>
                <p className={styles.text}>유사한 조건의 웨비나를 직접 기획하고, 실제 신청자 수를 집계했습니다.</p>
                <div className={styles.highlight}>
                  <p className={styles.highlightLabel}>검증 결과</p>
                  <p className={styles.highlightText}>
                    목표 80명 → 실제 <strong>83명 달성 (103%)</strong><br />
                    이 중 31%가 실제 참여. 이 데이터는 한국콘텐츠진흥원 아이디어 사업화 지원사업 선정에도 활용됐습니다.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* 이미지 그리드 */}
          <div className={styles.imageGrid}>
            <div className={styles.gridItem} />
            <div className={styles.gridItem} />
            <div className={styles.gridItem} />
          </div>

          {/* 작업과정 */}
          <div className={styles.body} style={{ paddingTop: 0 }}>
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>작업과정</p>
              </div>
              <div className={styles.sectionContent}>
                <p className={styles.sectionTitle}>문제 ① 콘텐츠가 적어 보인다</p>
                <p className={styles.text}>콘텐츠 수가 적은 상태에서 그대로 노출하면 첫 화면에서 이탈할 가능성이 높았습니다. 같은 콘텐츠라도 다르게 보이도록 노출 구조를 설계했습니다.</p>
                <ul className={styles.bullets}>
                  <li><strong>이벤트성 강의 노출</strong> — 시의성 있는 콘텐츠로 첫 관심 유도</li>
                  <li><strong>개인화된 콘텐츠 노출</strong> — 관심사 기반 추천으로 내 것처럼 느끼게</li>
                  <li><strong>랜덤 콘텐츠</strong> — 예상치 못한 발견으로 탐색 유도</li>
                </ul>
                <p className={styles.text}>같은 콘텐츠가 카테고리별로 다른 맥락에서 노출되어 콘텐츠의 순환이 일어나도록 했습니다.</p>
              </div>
            </div>
          </div>

          {/* 작업과정 02, 03 */}
          <div className={styles.body} style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div className={styles.section}>
              <div className={styles.sectionSide} />
              <div className={styles.sectionContent}>
                <p className={styles.sectionTitle}>문제 ② 한 번 오고 안 돌아온다</p>
                <p className={styles.text}>학습 플랫폼은 꾸준한 재방문이 없으면 의미가 없습니다. 두 가지로 재방문과 학습 지속을 유도했습니다.</p>
                <ul className={styles.bullets}>
                  <li><strong>진도율 시각화</strong> — 내가 어느 정도 진행했는지 한눈에 보여줌. 진행 중인 것을 완료하고 싶은 심리를 활용해 다음에 다시 들어올 이유를 만듦</li>
                  <li><strong>강사 메시지</strong> — 강사가 학습자에게 직접 메시지를 보냄. 강사가 나를 기억하고 응원한다는 느낌은 학습 의욕을 높이고 이탈을 줄임</li>
                </ul>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionSide} />
              <div className={styles.sectionContent}>
                <p className={styles.sectionTitle}>문제 ③ 타깃 사용자가 화면을 불편해한다</p>
                <p className={styles.text}>팀 내에서 "40-50대에게 다크모드가 맞을까"라는 의문이 생겼습니다. 가설을 세우는 대신 바로 확인하러 갔습니다. 작업하던 카페에서 같은 연령대 분들께 즉석으로 인터뷰를 진행했고, 두 가지를 확인했습니다.</p>
                <ul className={styles.bullets}>
                  <li>다크모드의 존재 자체를 모른다</li>
                  <li>화면을 직접 보여주니 "답답하고 잘 안 보인다"</li>
                </ul>
                <p className={styles.text}>전체 화면을 라이트 모드로 전환하고, 폰트 크기도 기본보다 크게 조정했습니다.</p>
              </div>
            </div>
          </div>

          {/* 이미지 */}
          <div className={styles.imageFull} />

          {/* 결과 + 회고 */}
          <div className={styles.body}>
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>결과</p>
              </div>
              <div className={styles.sectionContent}>
                <ul className={styles.bullets}>
                  <li>한국콘텐츠진흥원 아이디어 사업화 지원사업 선정</li>
                  <li>수요 검증 103% 달성</li>
                  <li>MVP 대비 화면 일관성 확보 및 엣지케이스 정의 완료</li>
                </ul>
              </div>
            </div>

            {/* 회고 */}
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>회고</p>
              </div>
              <div className={styles.sectionContent}>
                <p className={styles.text}>
                  화면을 만들기 전에 수요를 먼저 확인하는 것이 맞다는 걸 배웠습니다. 웨비나 하나로 "이 제품이 필요한가"를 직접 검증할 수 있었고, 그 데이터가 팀 방향 설정과 외부 지원사업 모두에 쓰였습니다.
                </p>
                <p className={styles.text}>
                  가설이 생기면 바로 확인하러 갑니다. 카페에서 한 즉석 인터뷰가 전체 화면 방향을 바꿨습니다. 완벽한 리서치 환경이 아니어도 직접 확인하는 것이 가장 빠릅니다.
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
