import Link from 'next/link';
import Image from 'next/image';
import GNB from '@/components/GNB';
import Footer from '@/components/Footer';
import styles from '../hr-contract/page.module.scss';

export default function VOCPage() {
  return (
    <>
      <GNB />
      <div className={styles.page}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerNav}>
            <Link href="/" className={styles.back}>← 전체 작업</Link>
            <Link href="/work/hds" className={styles.nextLink}>디자인시스템 구축 →</Link>
          </div>
          <p className={styles.meta}>AI · Vibe Coding · Product Designer</p>
          <h1 className={styles.title}>AI VOC 대시보드</h1>
        </div>

        {/* Hero */}
        <div className={styles.imageFull} style={{ overflow: 'hidden', position: 'relative', height: '576px' }}>
          <Image src="/images/voc1.png" alt="AI VOC 대시보드" fill style={{ objectFit: 'cover' }} unoptimized />
        </div>

        <div className={styles.header} style={{ paddingTop: 0 }}>
          <table className={styles.overviewTable}>
            <tbody>
              <tr><td>Project</td><td>AI Dashboard · 헬로인사</td></tr>
              <tr><td>Output</td><td>Web</td></tr>
              <tr><td>Role</td><td>Product Designer / 100%</td></tr>
              <tr><td>Period</td><td>2026.05</td></tr>
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
                  아무도 시키지 않은 프로젝트입니다. 고객사 VOC가 채팅으로 들어오고 있었지만, 이를 정리할 체계가 없었습니다. 매주 직접 대화 내용을 확인하고 엑셀에 수작업으로 정리하는 것이 유일한 방법이었습니다.
                </p>
              </div>
            </div>

            {/* 목표 */}
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>목표</p>
              </div>
              <div className={styles.sectionContent}>
                <ul className={styles.bullets}>
                  <li>VOC 수집부터 분류까지 자동화하여 수작업 제거</li>
                  <li>일별 / 주별 / 월별 VOC 현황을 수치로 파악</li>
                  <li>고객사별, 상품군별 히트맵 시각화</li>
                </ul>
              </div>
            </div>

            {/* 사용자정의 */}
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>사용자정의</p>
              </div>
              <div className={styles.sectionContent}>
                <p className={styles.text}><strong>내부 운영/CS팀</strong>{` — VOC를 수집하고 처리하는 담당자`}</p>
                <p className={styles.text}><strong>제품팀</strong>{` — VOC 데이터를 기반으로 개선 우선순위를 결정하는 팀`}</p>
              </div>
            </div>

            {/* 문제정의 */}
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>문제정의</p>
              </div>
              <div className={styles.sectionContent}>
                <ul className={styles.bullets}>
                  <li><strong>파악 불가</strong> — VOC가 얼마나 들어오는지, 어떤 유형이 많은지 수치로 볼 수 없음</li>
                  <li><strong>개선 여부 확인 불가</strong> — VOC를 처리하고 있지만 실제로 나아지고 있는지 알 수 없음</li>
                  <li><strong>고객사 파악 불가</strong> — 어느 고객사에서 VOC가 집중되는지 파악할 방법이 없음</li>
                </ul>
              </div>
            </div>

          </div>

          {/* 이미지 그리드 */}
          <div className={styles.imageGrid}>
            <div className={styles.gridItem} style={{ position: 'relative', background: '#fff' }}>
              <Image src="/images/voc2-1.png" alt="VOC 배경 1" fill style={{ objectFit: 'contain' }} unoptimized />
            </div>
            <div className={styles.gridItem} style={{ position: 'relative', background: '#f5f5f5' }}>
              <Image src="/images/voc2-2.png" alt="VOC 배경 2" fill style={{ objectFit: 'contain' }} unoptimized />
            </div>
            <div className={styles.gridItem} style={{ background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px' }}>
              <video
                src="/images/voc2-3.mov"
                autoPlay
                muted
                loop
                playsInline
                style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}
              />
            </div>
          </div>

          {/* 해결 */}
          <div className={styles.body} style={{ paddingTop: 0 }}>
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>해결</p>
              </div>
              <div className={styles.sectionContent}>
                <p className={styles.sectionTitle}>1. 데이터 파악</p>
                <p className={styles.text}>
                  내부 채팅에 쌓여 있는 VOC 채널의 전체 대화 데이터를 추출했습니다. 2025년 11월부터 실제 VOC를 직접 확인하며 데이터의 성격과 패턴을 파악했습니다.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.body} style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div className={styles.section}>
              <div className={styles.sectionSide} />
              <div className={styles.sectionContent}>
                <p className={styles.sectionTitle}>2. 분류 체계 설계</p>
                <p className={styles.text}>단순 버그 리포팅이 아니라 실질적인 고객 요청을 구분하기 위해 분류 기준을 직접 정의했습니다.</p>
                <ul className={styles.bullets}>
                  <li><strong>상품군</strong> — HR전자계약서 / 휴가관리 / Payroll / 출결근태 / 급여관리 / 기타</li>
                  <li><strong>VOC 유형</strong> — 기능 오류 / 사용성 / 데이터 오류 / 문의 등</li>
                  <li><strong>고객사별</strong> 좌표축 연동</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 영상 */}
          <div className={styles.imageFull} style={{ overflow: 'hidden', borderRadius: '12px' }}>
            <video
              src="/images/voc3.mov"
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          {/* 해결 03 + 결과 */}
          <div className={styles.body}>
            <div className={styles.section}>
              <div className={styles.sectionSide} />
              <div className={styles.sectionContent}>
                <p className={styles.sectionTitle}>3. 설득이 아닌 실제 화면으로</p>
                <p className={styles.text}>
                  초반 팀 내 반응은 미지근했습니다. VOC 정리 자동화의 필요성을 말로 설명하는 대신, 직접 만들어서 보여줬습니다. 바이브 코딩으로 실제 동작하는 프로토타입을 구현하자 팀에서 첫 번째 반응이 나왔습니다.
                </p>
                <p className={styles.sectionTitle}>4. 자동화 파이프라인 구축</p>
                <ul className={styles.bullets}>
                  <li>채팅 API 연동으로 신규 VOC 자동 수집</li>
                  <li>Gemini AI로 상품군 및 VOC 유형 자동 분류</li>
                  <li>대시보드에서 일별 / 주별 / 월별 현황 확인 가능</li>
                  <li>고객사별 VOC 로우 데이터 드릴다운 지원</li>
                </ul>
              </div>
            </div>

            {/* 성과 */}
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>성과</p>
              </div>
              <div className={styles.sectionContent}>
                <div className={styles.highlight}>
                  <p className={styles.highlightLabel}>팀 반응</p>
                  <p className={styles.highlightText}>
                    "이거 어디서 볼 수 있어요?"<br />
                    "URL 하나 파서 연결하죠."
                  </p>
                </div>
                <p className={styles.text}>조직에서 도구의 가치를 인정받는 순간이었습니다. 이후 내부 URL로 연결되어 팀에서 실제로 사용 중입니다.</p>
              </div>
            </div>

            {/* 회고 */}
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>회고</p>
              </div>
              <div className={styles.sectionContent}>
                <p className={styles.text}>
                  가장 어려웠던 부분은 데이터를 어떤 기준으로 분류하고 어떤 항목을 노출할지 결정하는 일이었습니다. 초반에는 기준을 잡기가 쉽지 않았는데, 팀이 실제로 궁금해하는 것과 앞으로 업무에서 확장해 쓸 수 있는 방향을 함께 고려하니 자연스럽게 기준이 생겼습니다. 일자별 비교, 상품군별 분류, VOC 유형, 고객사별 집계까지 항목이 구체화됐습니다.
                </p>
                <p className={styles.text}>
                  예상 밖이었던 건 API 연결이었습니다. 일반 채팅이 아닌 사내 전용 채팅이라 연결이 될지 확신이 없었는데, 직접 시도해보니 가능했습니다. 해보지 않으면 모른다는 걸 다시 한번 느꼈습니다.
                </p>
                <p className={styles.text}>
                  팀 모두가 궁금해하던 문제를 하나의 대시보드로 시각화하고, 기존에 무분별하게 처리되던 업무를 이제는 데이터 기반으로 돌아볼 수 있겠다는 확신이 생겼습니다. 이 경험이 프로덕트 디자이너로서 가장 보람 있는 작업 중 하나였습니다.
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className={styles.nextProjectSection}>
          <p className={styles.nextProjectLabel}>다음 프로젝트</p>
          <Link href="/work/hds" className={styles.nextProjectTitle}>디자인시스템 구축 →</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
