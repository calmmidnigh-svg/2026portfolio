import Link from 'next/link';
import Image from 'next/image';
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
          <div className={styles.headerNav}>
            <Link href="/" className={styles.back}>← 전체 작업</Link>
            <Link href="/work/hr-contract" className={styles.nextLink}>HR전자계약서 →</Link>
          </div>
          <p className={styles.meta}>Side Project · UX Research · Product Designer</p>
          <h1 className={styles.title}>지식 공유 강의 플랫폼</h1>
        </div>

        {/* Hero */}
        <div className={styles.imageFull} style={{ overflow: 'hidden', position: 'relative', height: '576px' }}>
          <Image src="/images/unretired1.png" alt="언리타이얼드" fill style={{ objectFit: 'cover' }} unoptimized priority />
        </div>

        <div className={styles.header} style={{ paddingTop: 0 }}>
          <table className={styles.overviewTable}>
            <tbody>
              <tr><td>Project</td><td>Side Project</td></tr>
              <tr><td>Output</td><td>iOS · Android · Web</td></tr>
              <tr><td>Role</td><td>Product Designer / 100%</td></tr>
              <tr><td>Period</td><td>2024.12 ~ 2025.07</td></tr>
            </tbody>
          </table>
        </div>

        <div className={styles.container}>
          <div className={styles.body}>

            {/* 배경 */}
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>배경</p>
              </div>
              <div className={styles.sectionContent}>
                <p className={styles.text}>
                  만 52.8세에 퇴직하는 대한민국에서, 69.4%의 시니어가 여전히 일하고 싶어합니다. 언리타이얼드는 이 고경력자들의 경험을 강의로 연결하고, 신입과 학습자들이 배울 수 있게 하는 지식 순환 플랫폼입니다.
                </p>
                <p className={styles.text}>초기 MVP가 있는 상태에서 중간에 합류했습니다.</p>
              </div>
            </div>

            {/* 목표 */}
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>목표</p>
              </div>
              <div className={styles.sectionContent}>
                <p className={styles.text}>
                  고경력자의 경험을 강의로 연결하는 지식 순환 플랫폼을 구축하고, 수강생의 실질적인 학습 경험을 설계합니다.
                </p>
              </div>
            </div>

            {/* 사용자정의 */}
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>사용자정의</p>
              </div>
              <div className={styles.sectionContent}>
                <p className={styles.text}><strong>수강생 (학습자)</strong>{` — 고경력자의 실무 경험을 배우고 싶은 직장인/학생`}</p>
                <p className={styles.text}><strong>강사 (고경력자)</strong>{` — 본인의 경험을 강의로 공유하고 싶은 시니어`}</p>
              </div>
            </div>

            {/* 문제정의 */}
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>문제정의</p>
              </div>
              <div className={styles.sectionContent}>
                <ul className={styles.bullets}>
                  <li><strong>화면이 엉망이었다</strong> — 화면 간 일관성이 없었고, 엣지케이스가 정의되지 않아 개발 구현이 안 될 것 같은 상태</li>
                  <li><strong>수강생을 모르는 채로 만들고 있었다</strong> — 강사진에 대한 니즈는 있었지만, 수강생이 무엇을 원하는지 파악 없음</li>
                  <li><strong>콘텐츠가 너무 적었다</strong> — 초기 서비스라 콘텐츠 수가 적었고, 그대로 노출하면 서비스가 빈약해 보일 것</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* 이미지 */}
        <div className={styles.imageFull}>
          <Image src="/images/unretired3.png" alt="언리타이얼드 작업 화면 3" width={4096} height={2304} style={{ width: '100%', height: 'auto', display: 'block' }} unoptimized />
        </div>

        <div className={styles.container}>
          <div className={styles.body}>

            {/* 사용자 인터뷰 */}
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>사용자 인터뷰</p>
              </div>
              <div className={styles.sectionContent}>
                <p className={styles.sectionTitle}>수요 검증 — 화면 전에 먼저 확인했습니다</p>
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

          {/* 이미지 */}
          <div className={styles.imageFull}>
            <Image src="/images/unretired2.png" alt="언리타이얼드 작업 화면 2" width={4096} height={1916} style={{ width: '100%', height: 'auto', display: 'block' }} unoptimized />
          </div>

          {/* 해결 */}
          <div className={styles.body} style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>해결</p>
              </div>
              <div className={styles.sectionContent}>
                <p className={styles.sectionTitle}>문제 ① 콘텐츠가 적어 보인다</p>
                <p className={styles.text}>콘텐츠 수가 적은 상태에서 그대로 노출하면 첫 화면에서 이탈할 가능성이 높았습니다. 같은 콘텐츠라도 다르게 보이도록 노출 구조를 설계했습니다.</p>
                <ul className={styles.bullets}>
                  <li><strong>이벤트성 강의 노출</strong> — 시의성 있는 콘텐츠로 첫 관심 유도</li>
                  <li><strong>개인화된 콘텐츠 노출</strong> — 관심사 기반 추천으로 내 것처럼 느끼게</li>
                  <li><strong>랜덤 콘텐츠</strong> — 예상치 못한 발견으로 탐색 유도</li>
                </ul>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionSide} />
              <div className={styles.sectionContent}>
                <p className={styles.sectionTitle}>문제 ② 한 번 오고 안 돌아온다</p>
                <p className={styles.text}>학습 플랫폼은 꾸준한 재방문이 없으면 의미가 없습니다.</p>
                <ul className={styles.bullets}>
                  <li><strong>진도율 시각화</strong> — 내가 어느 정도 진행했는지 한눈에 보여줌. 진행 중인 것을 완료하고 싶은 심리를 활용해 다음에 다시 들어올 이유를 만듦</li>
                  <li><strong>강사 메시지</strong> — 강사가 학습자에게 직접 메시지를 보냄. 강사가 나를 기억하고 응원한다는 느낌은 학습 의욕을 높이고 이탈을 줄임</li>
                </ul>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionSide} />
              <div className={styles.sectionContent}>
                <p className={styles.sectionTitle}>문제 ③ 사용자정의가 화면을 불편해한다</p>
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
          <div className={styles.imageFull}>
            <Image src="/images/unretired4.png" alt="언리타이얼드 작업 화면 4" width={4096} height={2304} style={{ width: '100%', height: 'auto', display: 'block' }} unoptimized />
          </div>

          {/* 성과 + 회고 */}
          <div className={styles.body}>
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>성과</p>
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
                  가장 어려웠던 점은 사용자 니즈 데이터를 어떻게 확보하느냐였습니다. 뚜렷한 방법이 없어 막막했는데, 평소 자주 접하던 경험을 떠올리다 웨비나가 생각났고 이를 통해 실제 니즈를 검증할 수 있겠다는 확신이 생겼습니다. 팀이 받아들일지, 신청자가 모일지 걱정했지만 팀의 반응은 긍정적이었고 신청자는 목표를 초과 달성했습니다. 걱정할 시간에 일단 시도해보는 것이 훨씬 빠르다는 걸 몸으로 배웠습니다.
                </p>
                <p className={styles.text}>
                  또 하나 깨달은 건 고령 사용자의 사용성을 데스크 리서치만으로 파악하려 했던 한계였습니다. 프로젝트에 의구심이 생길 때는 관련 사용자와 직접 만나는 것이 가장 효과적이라는 것, 그리고 그 자리가 꼭 정해진 리서치 환경일 필요는 없다는 것을 이 프로젝트에서 배웠습니다.
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className={styles.nextProjectSection}>
          <p className={styles.nextProjectLabel}>다음 프로젝트</p>
          <Link href="/work/hr-contract" className={styles.nextProjectTitle}>HR전자계약서 →</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
