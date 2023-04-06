import React, { useState } from 'react';
import 'katex/dist/katex.min.css';
import katex, { KatexOptions } from 'katex';
import Box from './common/Box';

// type TextBoxProps = {};

const splitText = (input: string) => {
  const split = input.split(/(?<!\\)(?:\$|\\\(|\\\)|\\\[\]|\\\[\])(?!\\)/);
  const text = split.filter((_, i) => i % 2 === 0);
  const math = split.filter((_, i) => i % 2 === 1);
  return { text, math };
};

const removeMathLimiters = (math: string[]) => math.map((m) => {
  if (m.startsWith('$$') && m.endsWith('$$')) {
    return `\\displaystyle ${m.slice(2, -2)}`;
  }
  if (m.startsWith('$') && m.endsWith('$')) {
    return m.slice(1, -1);
  }
  if (m.startsWith('\\(') && m.endsWith('\\)')) {
    return m.slice(2, -2);
  }
  if (m.startsWith('\\[') && m.endsWith('\\]')) {
    return `\\displaystyle ${m.slice(2, -2)}`;
  }
  return m;
});

const renderKaTeX = (input: string, options?: KatexOptions) => katex.renderToString(String.raw`${input}`, {
  throwOnError: false,
  output: 'html',
  ...options,
});

const renderText = (input: string) => {
  const { text, math } = splitText(input);
  const mathWithoutLimiters = removeMathLimiters(math);

  return text.map((t, i) => {
    if (i >= mathWithoutLimiters.length) {
      return `<span>${t}</span>`;
    }
    return `<span>${t}</span>${renderKaTeX(mathWithoutLimiters[i], { displayMode: false }) ?? ''}`;
  }).join('');
};

function TextBox() {
  const [text, setText] = useState<string | undefined>(undefined);

  return (
    <Box fit>
      <div className="flex flex-col h-full justify-start items-center gap-y-4 overflow-hidden">
        <textarea
          placeholder="Text + Inline Latex..."
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
          className="box-border text-neutral-400 w-full bg-white dark:bg-neutral-800 focus:outline-none"
        />
        <div
          className="w-full h-fit scrollbar-thin"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={
            { __html: renderText(text ?? '') }
          }
        />
        <div className="w-full text-stone-600">
          {text ?? ''}
        </div>
      </div>
    </Box>
  );
}

export default TextBox;
