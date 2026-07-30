import React from 'react';

interface LiveProjectButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
}

export default function LiveProjectButton({
  onClick,
  className = '',
  label = 'Live Project',
}: LiveProjectButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 active:scale-95 transition-all duration-200 cursor-pointer ${className}`}
    >
      {label}
    </button>
  );
}
