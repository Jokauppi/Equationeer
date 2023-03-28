import React from 'react';

type BoxProps = {
  children: React.ReactNode;
  additionalClassNames?: string;
  fit?: boolean;
};

export default function Box({ children, additionalClassNames, fit = false }: BoxProps) {
  const boxDefaultStyle = 'bg-white rounded-xl p-4 w-full';
  const hSize = fit ? 'h-fit' : 'h-full';

  return (
    <div className={`${boxDefaultStyle} ${hSize} ${additionalClassNames}`}>
      {children}
    </div>
  );
}
