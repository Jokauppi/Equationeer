import React, { useState } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import Box from './common/Box';

function KaTeXBox() {
  const [math, setMath] = useState<string | undefined>(undefined);

  return (
    <Box fit>
      <div className="flex flex-col h-full justify-start items-center gap-x-2 overflow-hidden">
        <textarea
          placeholder="LaTeX..."
          value={math}
          onChange={(event) => {
            setMath(event.target.value);
          }}
          className="box-border text-neutral-400 w-full bg-white dark:bg-neutral-800 focus:outline-none"
        />
        <div
          className="w-full h-fit py-4"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={
            {
              __html: katex.renderToString(String.raw`\text{${math?.replaceAll(/(?<=[a-z]|[,-.]) +(?=[a-z]|[,-.])/gi, '}\\allowbreak\\text{\\space ')}}` ?? '', {
                throwOnError: false,
                displayMode: false,
              }),
            }
          }
        />
        <div>
          {String.raw`\text{${math?.replaceAll(/(?<=[a-z]|[,-.]) +(?=[a-z]|[,-.])/gi, '}\\allowbreak\\text{ ')}}`}
        </div>
      </div>
    </Box>
  );
}

export default KaTeXBox;
