import React from 'react';
import Box from './common/Box';
import KaTeXBox from './KaTeXBox';
import TextBox from './TextBox';

function PageColumn() {
  return (
    <div className="w-full h-fit md:h-full md:pb-4 md:p-0 overflow-hidden overflow-y-auto overscroll-contain scrollbar-none md:scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-neutral-700 scrollbar-track-transparent rounded-xl">
      <div className="h-full font-serif">
        <div className="h-full flex flex-col items-center p-4 md:pl-2 gap-y-4">
          <Box fit className="flex flex-col items-center">
            <h1 className="text-3xl text-black dark:text-white">Title</h1>
            <p>Author</p>
          </Box>
          <TextBox />
          <KaTeXBox type="text" />
          <KaTeXBox type="inline" />
          <KaTeXBox type="display" />
        </div>
      </div>
    </div>
  );
}

export default PageColumn;
