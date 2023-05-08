import React, { useState } from 'react';
import 'katex/dist/katex.min.css';
import katex, { KatexOptions } from 'katex';
import { parse } from '@unified-latex/unified-latex-util-parse';
import { toString } from '@unified-latex/unified-latex-util-to-string';
import Box from './common/Box';

// type TextBoxProps = {};

/**
 * Splits text with inline and display latex to an array by delimiters $$, $, \(, \) and \[ and \].
 * while preserving delimiters.
 * Escaped delimiters are ignored.
 * @param input text as string with latex delimited by $, $$, \( and \) or \[ and \]
 * @returns array of strings with latex or text
 */
const splitText = (input: string) => {
  const chunks = input.match(/(?<!\\)\$\$.*?(?<!\\)\$\$|(?<!\\)\$.*?(?<!\\)\$|\\\(.*?\\\)|\\\[.*?\\\]|.+?(?=$|(?<!\\)\$|\\\(|\\\[)/gsu);
  return chunks ? [...chunks] : [];
};

const mapToMathObjects = (chunks: string[]) => chunks.map((chunk) => {
  if ((chunk.startsWith('$$') && chunk.length > 2) || chunk.startsWith('\\[')) {
    return {
      content: chunk.slice(2, -2),
      displayMode: 'display',
    };
  } if (chunk.startsWith('\\(') && chunk.endsWith('\\)')) {
    return {
      content: chunk.slice(2, -2),
      displayMode: 'inline',
    };
  } if (chunk.startsWith('$')) {
    return {
      content: chunk.slice(1, -1),
      displayMode: 'inline',
    };
  }
  return {
    content: chunk,
    displayMode: 'text',
  };
});

/**
 * Renders given latex string to html.
 * @param input latex string
 * @param options additional katex options
 * @returns html string
*/
const renderKaTeX = (input: string, options?: KatexOptions) => katex.renderToString(String.raw`${input}`, {
  throwOnError: false,
  output: 'html',
  ...options,
});

/**
 * Splits text and inline latex to an array and renders each element inside a span.
 * @param input text as string with inline latex delimited by $, $$, \( and \) or \[ and \]
 * @returns string with text and inline latex rendered inside spans
 * @example
 * ```js
 * renderText('Hello $LaTeX$')
 * // '<span>Hello </span><span>['LaTeX' in latex inline math]</span>'
 * ```
*/
const renderText = (input: string) => {
  const chunks = mapToMathObjects(splitText(input));

  return chunks.map((chunk) => {
    if (chunk.displayMode === 'text') {
      return `<span>${chunk.content}</span>`;
    }
    if (chunk.displayMode === 'display') {
      return `${renderKaTeX(chunk.content, { displayMode: true }) ?? ''}`;
    }
    return `${renderKaTeX(chunk.content, { displayMode: false }) ?? ''}`;
  }).join('');
};

function TextBox() {
  const [text, setText] = useState<string | undefined>(undefined);

  const LTXAST = parse(text || '');

  return (
    <Box fit>
      <div className="flex flex-col h-full justify-start items-start gap-y-4 overflow-hidden">
        <p>Input</p>
        <textarea
          placeholder="Text + Inline Latex..."
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
          className="box-border text-neutral-400 w-full bg-white dark:bg-neutral-800 focus:outline-none"
        />

        <hr className="w-full h-px bg-slate-200 dark:bg-neutral-600 border-0" />

        <p>Rendered</p>
        <div
          className="w-full h-fit scrollbar-thin"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={
            { __html: renderText(text ?? '') }
          }
        />

        <hr className="w-full h-px bg-slate-200 dark:bg-neutral-600 border-0" />

        <p>Pretty printed</p>
        <div className="w-full text-stone-600">
          {toString(LTXAST)}
        </div>

        <hr className="w-full h-px bg-slate-200 dark:bg-neutral-600 border-0" />

        <p>AST</p>
        <div className="w-full text-stone-600">
          <pre>
            {JSON.stringify(LTXAST, null, 2)}
          </pre>
        </div>

        <hr className="w-full h-px bg-slate-200 dark:bg-neutral-600 border-0" />

        <p>Object array</p>
        <div className="w-full text-stone-600">
          {JSON.stringify(mapToMathObjects(splitText(text || '')))}
        </div>
      </div>
    </Box>
  );
}

export default TextBox;
