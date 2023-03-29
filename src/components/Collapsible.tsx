import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Box from './Box';

type CollapsibleProps = {
  title: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
  openClass?: string;
  closedClass?: string;
  commonClass?: string;
  logo?: React.ReactNode;
  buttons?: React.ReactNode | React.ReactNode[];
};

function Collapsible({
  title, open, setOpen, children, openClass, closedClass, commonClass, logo, buttons,
}: CollapsibleProps) {
  const openClassName = `h-full ${openClass}`;
  const closedClassName = `h-fit shrink-0 ${closedClass}`;

  return (
    <Box className={twMerge(`flex flex-col p-0 ${commonClass} ${open ? openClassName : closedClassName}`)}>
      <button
        type="button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="flex flex-row justify-between content-center p-4">
          <div className="flex flex-row justify-start content-center gap-x-2">
            {logo}
            <div className="text-black dark:text-white font-medium">
              {title}
            </div>
          </div>
          <div className="flex flex-row justify-end content-center gap-x-2">
            {/*
              eslint-disable
              jsx-a11y/click-events-have-key-events,
              jsx-a11y/no-static-element-interactions
            */}
            <div
              className="flex flex-row justify-end content-center gap-x-2"
              onClick={(e) => { e.stopPropagation(); }}
            >
              {buttons}
            </div>
            {open ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>
        </div>
      </button>
      <div className={`px-4 overflow-hidden ${!open ? 'hidden' : ''}`}>
        {children}
      </div>
    </Box>
  );
}

export default Collapsible;
