import React from 'react';
import { motion } from 'motion/react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  key?: React.Key;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className = '',
  style,
}: FadeInProps) {
  const Component = motion.create(as as any);

  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </Component>
  );
}
