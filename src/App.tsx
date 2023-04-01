import React, { useState } from 'react';
import ActionColumn from './components/ActionColumn';
import PageColumn from './components/PageColumn';

function App() {
  const [darkMode, setDarkMode] = useState(window.matchMedia('(prefers-color-scheme:dark)').matches ?? true);

  return (
    <div className={`App flex flex-row justify-center w-screen dhscreen font-sans text-black touch-pan-y ${darkMode ? 'dark bg-neutral-950' : 'bg-slate-300'}`}>
      <div className="flex flex-col-reverse md:flex-row justify-between w-full h-full bg-slate-150 dark:bg-neutral-900 3xl:max-w-screen-3xl md:shadow-2xl">
        <ActionColumn darkMode={darkMode} setDarkMode={setDarkMode} />
        <PageColumn />
      </div>
    </div>
  );
}

export default App;
