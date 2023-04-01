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
  openAbove?: boolean;
  openSymbols?: React.ReactNode[];
};

function Collapsible({
  title,
  open,
  setOpen,
  children,
  openClass,
  closedClass,
  commonClass,
  logo,
  buttons,
  openAbove = false,
  openSymbols = [<ChevronUp size={24} />, <ChevronDown size={24} />],
}: CollapsibleProps) {
  const openClassName = `h-full ${openClass ?? ''}`;
  const closedClassName = `h-fit shrink-0 ${closedClass ?? ''}`;

  return (
    <Box className={twMerge(`flex rounded-xl overflow-hidden bg-slate-100 dark:bg-neutral-850 ${openAbove ? 'flex-col-reverse' : 'flex-col'} p-0 ${commonClass ?? ''} ${open ? openClassName : closedClassName}`)}>
      <div
        className="z-20 flex flex-row shrink-0 justify-between content-center bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md"
      >
        <button
          className={`w-full p-4 pr-0 ${buttons && 'mr-4'}`}
          type="button"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div className="w-full flex flex-row justify-start content-center gap-x-3">
            {logo}
            <div className="text-black dark:text-white font-medium">
              {title}
            </div>
          </div>
        </button>
        <div className="flex flex-row justify-end content-center gap-x-4">
          {/*
              eslint-disable
              jsx-a11y/click-events-have-key-events,
              jsx-a11y/no-static-element-interactions
            */}
          <div
            className="py-4 flex flex-row justify-end content-center gap-x-4"
            onClick={(e) => { e.stopPropagation(); }}
          >
            {buttons}
          </div>
          <button
            className="pr-4"
            type="button"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? openSymbols[0] : openSymbols[1]}
          </button>
        </div>
      </div>
      <div
        className={`h-full overflow-hidden ${!open ? 'hidden' : ''}`}
      >
        {children}
      </div>
    </Box>
  );
}

export default Collapsible;
