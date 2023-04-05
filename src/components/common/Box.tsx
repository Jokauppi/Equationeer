import React from 'react';
import { twMerge } from 'tailwind-merge';

type BoxProps = {
  children: React.ReactNode;
  className?: string;
  fit?: boolean;
};

export default function Box({ children, className, fit = false }: BoxProps) {
  const boxDefaultStyle = 'p-4 bg-white text-slate-600 dark:bg-neutral-800 dark:text-neutral-400 rounded-xl w-full shadow-lg';
  const hSize = fit ? 'h-fit' : 'h-full';

  return (
    <div className={twMerge(`${boxDefaultStyle} ${hSize} ${className}`)}>
      {children}
    </div>
  );
}
