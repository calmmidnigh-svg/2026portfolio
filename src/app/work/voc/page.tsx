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
          <Link href="/" className={styles.back}>← 전체 작업</Link>
          <p className={styles.meta}>AI · Vibe Coding · Product Designer</p>
          <h1 className={styles.title}>AI VOC 대시보드</h1>
        </div>

        {/* Hero — 이미지 영역 */}
        <div className={styles.imageFull} style={{ overflow: 'hidden', position: 'relative', height: '576px' }}>
          <Image src="/images/voc1.png" alt="AI VOC 대시보드" fill style={{ objectFit: 'cover' }} unoptimized />
        </div>

        <div className={styles.header} style={{ paddingTop: 0 }}>
          <table className={styles.overviewTable}>
            <tbody>
              <tr><td>Project</td><td>AI Dashboard · 헬로인사</td></tr>
              <tr><td>Output</td><td>Web</td></tr>
              <tr><td>Role</td><td>Product Designer / 100%</td></tr>
              <tr><td>Period</td><td>2025.11 ~</td></tr>
            </tbody>
          </table>
        </div>

        <div className={styles.container}>

          <div className={styles.body}>

            {/* 문제정의 */}
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>문제정의</p>
              </div>
              <div className={styles.sectionContent}>
                <p className={styles.subHeading}>직접 경험한 문제에서 시작했습니다</p>
                <p className={styles.text}>
                  고객사 VOC가 채팅으로 들어오고 있었지만, 이를 정리할 체계가 없었습니다. 매주 직접 대화 내용을 확인하고 엑셀에 수작업으로 정리하는 것이 유일한 방법이었습니다.
                </p>
                <ul className={styles.bullets}>
                  <li><strong>파악 불가</strong> — VOC가 얼마나 들어오는지, 어떤 유형이 많은지 수치로 볼 수 없음</li>
                  <li><strong>개선 여부 확인 불가</strong> — VOC를 처리하고 있지만 실제로 나아지고 있는지 알 수 없음</li>
                  <li><strong>고객사 파악 불가</strong> — 어느 고객사에서 VOC가 집중되는지 파악할 방법이 없음</li>
                </ul>
                <p className={styles.text}>
                  직접 느끼는 비효율이었고, 동시에 팀에서도 동일한 니즈가 있다는 것을 확인했습니다.
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

          {/* 작업과정 01 */}
          <div className={styles.body} style={{ paddingTop: 0 }}>
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>작업과정</p>
              </div>
              <div className={styles.sectionContent}>
                <p className={styles.sectionTitle}>1. 데이터 파악</p>
                <p className={styles.text}>
                  내부 채팅에 쌓여 있는 VOC 채널의 전체 대화 데이터를 추출했습니다. 2025년 11월부터 실제 VOC를 직접 확인하며 데이터의 성격과 패턴을 파악했습니다.
                </p>
              </div>
            </div>
          </div>

          {/* 작업과정 02 */}
          <div className={styles.body} style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div className={styles.section}>
              <div className={styles.sectionSide} />
              <div className={styles.sectionContent}>
                <p className={styles.sectionTitle}>2. 분류 체계 설계</p>
                <p className={styles.text}>
                  단순 버그 리포팅이 아니라 실질적인 고객 요청을 구분하기 위해 분류 기준을 직접 정의했습니다.
                </p>
                <ul className={styles.bullets}>
                  <li><strong>상품군</strong> — HR전자계약서 / 휴가관리 / Payroll / 출결근태 / 급여관리 / 기타</li>
                  <li><strong>VOC 유형</strong> — 기능 오류 / 사용성 / 데이터 오류 / 문의 등</li>
                  <li><strong>고객사별</strong> 좌표축 연동</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 이미지 */}
          <div className={styles.imageFull} />

          {/* voc3 영상 */}
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

          {/* 작업과정 03 + 결과 */}
          <div className={styles.body}>
            <div className={styles.section}>
              <div className={styles.sectionSide} />
              <div className={styles.sectionContent}>
                <p className={styles.sectionTitle}>3. 설득이 아닌 실제 화면으로</p>
                <p className={styles.text}>
                  초반 팀 내 반응은 미지근했습니다. VOC 정리 자동화의 필요성을 말로 설명하는 대신, 직접 만들어서 보여줬습니다. 바이브 코딩으로 실제 동작하는 프로토타입을 구현하자 팀에서 첫 번째 반응이 나왔습니다.
                </p>
                <div className={styles.highlight}>
                  <p className={styles.highlightLabel}>팀 반응</p>
                  <p className={styles.highlightText}>
                    "이거 어디서 볼 수 있어요?"<br />
                    "URL 하나 파서 연결하죠."
                  </p>
                </div>
                <p className={styles.text}>조직에서 도구의 가치를 인정받는 순간이었습니다.</p>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionSide} />
              <div className={styles.sectionContent}>
                <p className={styles.sectionTitle}>4. 자동화 파이프라인 구축</p>
                <ul className={styles.bullets}>
                  <li>채팅 API 연동으로 신규 VOC 자동 수집</li>
                  <li>Gemini AI로 상품군 및 VOC 유형 자동 분류</li>
                  <li>대시보드에서 일별 / 주별 / 월별 현황 확인 가능</li>
                  <li>고객사별 VOC 로우 데이터 드릴다운 지원</li>
                </ul>
              </div>
            </div>

            {/* 회고 */}
            <div className={styles.section}>
              <div className={styles.sectionSide}>
                <p className={styles.sectionLabel}>회고</p>
              </div>
              <div className={styles.sectionContent}>
                <ul className={styles.bullets}>
                  <li>요구사항은 데이터에서 나옵니다. 분류 기준을 만들기 위해 데이터를 먼저 읽어야 했습니다.</li>
                  <li>AI가 잘못 분류하는 코너케이스를 의식하고, 입력 데이터의 질을 정의하는 것이 분류 정확도에 직결됩니다.</li>
                  <li>사용자(내부 팀)이 데이터를 신뢰하려면 자동 분류 결과를 직접 수정할 수 있는 툴이 필요합니다.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
