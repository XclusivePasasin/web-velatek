'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';

export function Reveal({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [observing, setObserving] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    setObserving(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${observing && !visible ? 'reveal-pending' : ''} ${
        visible ? 'is-visible' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
