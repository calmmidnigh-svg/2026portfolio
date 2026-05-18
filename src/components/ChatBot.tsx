'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './ChatBot.module.scss';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SUGGESTIONS = ['연차가 어떻게 되나요?', '어떤 회사에서 일했나요?', '어떤 경험을 가지고있나요?'];

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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
        <div className={styles.messages}>
          {messages.map((m, i) => (
            <div key={i} className={`${styles.message} ${styles[m.role]}`}>
              {m.content}
            </div>
          ))}
          {loading && (
            <div className={styles.loading}>
              <span /><span /><span />
            </div>
          )}
          <div ref={messagesEndRef} />
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
          disabled={loading || !input.trim()}
          aria-label="전송"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
