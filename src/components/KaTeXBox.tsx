import React, { useState } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import Box from './common/Box';

type KaTeXBoxProps = {
  type: 'text' | 'math';
};

function KaTeXBox(
  { type }: KaTeXBoxProps,
) {
  const [math, setMath] = useState<string | undefined>(undefined);

  return (
    <Box fit>
      <div className="flex flex-col h-full justify-start items-center gap-y-4 overflow-hidden">
        <textarea
          placeholder={type === 'text' ? 'LaTeX Textmode...' : 'LaTeX Mathmode...'}
          value={math}
          onChange={(event) => {
            setMath(event.target.value);
          }}
          className="box-border text-neutral-400 w-full bg-white dark:bg-neutral-800 focus:outline-none"
        />
        <div
          className="w-full h-fit"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={
            type === 'text' ? {
              __html: katex.renderToString(String.raw`\text{${math?.replaceAll(/(?<=[a-z]|[,-.]) +(?=[a-z]|[,-.])/gi, '}\\allowbreak\\text{ ')}}` ?? '', {
                throwOnError: false,
                displayMode: false,
              }),
            }
              : {
                __html: katex.renderToString(String.raw`${math}` ?? '', {
                  throwOnError: false,
                  displayMode: true,
                }),
              }
          }
        />
        <div className="w-full text-stone-600">
          {type === 'text'
            ? String.raw`LaTeX Source: ${math?.replaceAll(/(?<=[a-z]|[,-.]) +(?=[a-z]|[,-.])/gi, '}\\allowbreak\\text{ ')}}`
            : String.raw`LaTeX Source: ${math}`}
        </div>
      </div>
    </Box>
  );
}

export default KaTeXBox;
