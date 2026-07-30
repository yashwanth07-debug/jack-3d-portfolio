import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

interface CharacterProps {
  char: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  key?: React.Key;
}

function Character({ char, index, total, scrollYProgress }: CharacterProps) {
  const startRange = (index / total) * 0.82; 
  const endRange = Math.min(1.0, startRange + 0.18);

  const opacity = useTransform(scrollYProgress, [startRange, endRange], [0.2, 1.0]);

  return (
    <span className="relative inline-block" style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}>
      <span className="opacity-0 select-none" aria-hidden="true">
        {char}
      </span>
      <motion.span
        className="absolute top-0 left-0 select-none"
        style={{ opacity }}
      >
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const elementRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');

  return (
    <p
      ref={elementRef}
      className={`${className} leading-relaxed`}
      style={style}
    >
      {chars.map((char, index) => (
        <Character
          key={index}
          char={char}
          index={index}
          total={chars.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
}
