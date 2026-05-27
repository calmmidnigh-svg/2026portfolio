'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './ChatBot.module.scss';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SUGGESTIONS = ['연차가 어떻게 되나요?', '어떤 회사에서 일했나요?', '어떤 경험을 가지고있나요?'];

const URL_REGEX = /(https?:\/\/[^\s)]+)/g;

const renderWithLinks = (text: string) =>
  text.split(URL_REGEX).map((part, i) =>
    URL_REGEX.test(part) ? (
      <a key={i} href={part} target="_blank" rel="noopener noreferrer" style={{ color: '#126DFF', textDecoration: 'underline', wordBreak: 'break-all' }}>
        {part}
      </a>
    ) : (
      part
    )
  );

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = messagesContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;
    const userMessage: Message = { role: 'user', content: text.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setStarted(true);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: '잠시 후 다시 시도해 주세요.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  return (
    <div className={styles.chatbot}>
      {!started ? (
        <div className={styles.suggestions}>
          {SUGGESTIONS.map(q => (
            <button key={q} className={styles.suggestion} onClick={() => send(q)}>
              {q}
            </button>
          ))}
        </div>
      ) : (
        <div className={styles.messages} ref={messagesContainerRef}>
          {messages.map((m, i) => (
            <div key={i} className={`${styles.message} ${styles[m.role]}`}>
              {renderWithLinks(m.content)}
            </div>
          ))}
          {loading && (
            <div className={styles.loading}>
              <span /><span /><span />
            </div>
          )}
        </div>
      )}

      <div className={styles.inputArea}>
        <input
          className={styles.input}
          placeholder="저에대해 궁금한점을 물어보세요. ☺️"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className={styles.sendBtn}
          onClick={() => send(input)}
          disabled={loading}
          aria-label="전송"
        >
          <Image src="/images/send.svg" alt="전송" width={24} height={24} />
        </button>
      </div>
      <p className={styles.disclaimer}>해당 답변은 제가 학습 시킨 정보 기반 AI가 답변해주고 있어요!</p>
    </div>
  );
}
