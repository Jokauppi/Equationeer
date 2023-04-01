import React, { useState } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import Box from './common/Box';

type KaTeXBoxProps = {
  type: 'text' | 'inline' | 'display';
};

const textAreaPlaceholders = {
  text: 'LaTeX Textmode...',
  inline: 'LaTeX Inline Mathmode...',
  display: 'LaTeX Display Mathmode...',
};

const inputPreprocessors : {
  [key in KaTeXBoxProps['type']]: (input: string) => string;
} = {
  text: (input: string) => input.replaceAll(/(?<=[a-z]|[,-.]) +(?=[a-z]|[,-.])/gi, ' } \\allowbreak \\text{'),
  inline: (input: string) => input,
  display: (input: string) => input,
};

const inputRenderers: {
  [key in KaTeXBoxProps['type']]: (input: string) => string;
} = {
  text: (input: string) => katex.renderToString(String.raw`\text{${inputPreprocessors.text(input)}}`, {
    throwOnError: false,
    displayMode: false,
  }),
  inline: (input: string) => katex.renderToString(String.raw`${inputPreprocessors.inline(input)}`, {
    throwOnError: false,
    displayMode: false,
  }),
  display: (input: string) => katex.renderToString(String.raw`${inputPreprocessors.display(input)}`, {
    throwOnError: false,
    displayMode: true,
  }),
};

function KaTeXBox(
  { type }: KaTeXBoxProps,
) {
  const [math, setMath] = useState<string | undefined>(undefined);

  return (
    <Box fit>
      <div className="flex flex-col h-full justify-start items-center gap-y-4 overflow-hidden">
        <textarea
          placeholder={textAreaPlaceholders[type]}
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
            { __html: inputRenderers[type](math ?? '') }
          }
        />
        <div className="w-full text-stone-600">
          {inputPreprocessors[type](math ?? '')}
        </div>
      </div>
    </Box>
  );
}

export default KaTeXBox;
