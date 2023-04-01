import React from 'react';
import Box from './common/Box';
import KaTeXBox from './KaTeXBox';

function PageColumn() {
  return (
    <div className="w-full overflow-hidden rounded-lg">
      <div className="h-full font-serif overflow-y-auto scrollbar-none md:scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-neutral-700 scrollbar-track-transparent">
        <div className="h-full flex flex-col items-center gap-y-4">
          <Box fit className="flex flex-col items-center">
            <h1 className="text-3xl text-black dark:text-white">Title</h1>
            <p>Author</p>
          </Box>
          <KaTeXBox type="text" />
          <KaTeXBox type="inline" />
          <KaTeXBox type="display" />
        </div>
      </div>
    </div>
  );
}

export default PageColumn;
