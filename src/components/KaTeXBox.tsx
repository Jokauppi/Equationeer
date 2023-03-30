import React, { useState } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import Box from './common/Box';

function KaTeXBox() {
  const [math, setMath] = useState<string | undefined>(undefined);

  return (
    <Box fit>
      <div className="flex flex-col justify-start items-center gap-x-2">
        <textarea
          placeholder="LaTeX..."
          value={math}
          onChange={(event) => {
            setMath(event.target.value);
          }}
          className="text-neutral-400 w-full h-fit bg-white dark:bg-neutral-800 focus:outline-none"
        />
        <div className="w-fit scale-150" dangerouslySetInnerHTML={{ __html: katex.renderToString(math ?? '', { throwOnError: false }) }} />
      </div>
    </Box>
  );
}

export default KaTeXBox;
