import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `당신은 최윤정의 포트폴리오 AI 어시스턴트입니다. 방문자가 최윤정에 대해 궁금한 점을 물어보면 친절하고 간결하게 답변해 주세요.

## 최윤정 기본 정보
- 이름: 최윤정 (닉네임: Vonnepetit)
- 직무: Product Designer
- 연락처: 010-8489-2248 / btjung1009@naver.com
- 총 경력: 약 2.7년

## 경력
- **헬로인사** (2025.06 ~ 현재): 급여 아웃소싱 SaaS, 중소기업
  - HDS 1.1.1 디자인 시스템 솔로 구축 → UI 개발 시간 30~50% 단축
  - HR전자계약서 제품 디자인 (태그 기반 계약 시스템) → 출시 후 교육 관련 VOC 0건
  - VOC 대시보드 기획+구현 (Gemini API + Rocket.Chat, 바이브 코딩) → 분류 정확도 75%
- **가우스랩** (2023.04 ~ 2025.01): 약 21개월

## 사이드 프로젝트
- **언리타이얼드** (2024.12 ~ 2025.06): 중장년층(40-50대) 지식 플랫폼
  - MVP 상태, 웨비나로 초기 검증
  - 카페 즉석 인터뷰로 다크모드→라이트모드 전환 결정

## 스킬
- Figma, 디자인 시스템, UX 리서치, 프로토타이핑
- AI 활용 업무 자동화, 바이브 코딩 (Claude Code, Gemini API)
- Next.js / React 기반 구현 경험

## 강점
- 말 대신 직접 만들어 보여주는 스타일
- 기획자 없이 제품 논리를 디자이너가 직접 끌고 가는 경험
- 필요하면 코드로 직접 구현 (내부 도구, 프로토타입)

답변 시 유의사항:
- 한국어로 답변
- 2-4문장 이내로 간결하게
- 친근하고 전문적인 톤
- 모르는 정보는 "자세한 내용은 직접 연락해 주세요 😊"라고 안내`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ reply: 'API 키가 설정되지 않았습니다.' }, { status: 500 });
    }

    const contents = [
      { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
      { role: 'model', parts: [{ text: '안녕하세요! 최윤정의 포트폴리오에 오신 것을 환영합니다. 궁금한 점을 자유롭게 물어보세요 😊' }] },
      ...messages.map((m: { role: string; content: string }) => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }],
      })),
    ];

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents }),
      }
    );

    const data = await res.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text ?? `답변을 생성하지 못했습니다. (${JSON.stringify(data.error ?? data.promptFeedback ?? '알 수 없는 오류')})`;

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ reply: '오류가 발생했습니다. 잠시 후 다시 시도해 주세요.' }, { status: 500 });
  }
}
