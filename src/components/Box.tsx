import React from 'react';

type BoxProps = {
  children: React.ReactNode;
  additionalClassNames?: string;
  fit?: boolean;
};

export default function Box({ children, additionalClassNames, fit = false }: BoxProps) {
  const boxDefaultStyle = 'bg-white text-slate-600 dark:bg-neutral-800 dark:text-neutral-400 rounded-xl p-4 w-full';
  const hSize = fit ? 'h-fit' : 'h-full';

  return (
    <div className={`${boxDefaultStyle} ${hSize} ${additionalClassNames}`}>
      {children}
    </div>
  );
}
