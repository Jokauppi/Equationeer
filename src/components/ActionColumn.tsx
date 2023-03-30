import React, { useState } from 'react';
import FilePanel from './panels/FilePanel';
import LogoPanel from './panels/LogoPanel';
import MacroPanel from './panels/MacroPanel';
import SettingsPanel from './panels/SettingsPanel';
import SymbolPanel from './panels/SymbolPanel';

type ActionColumnProps = {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
};

function ActionColumn({ darkMode, setDarkMode }: ActionColumnProps) {
  const [filesOpen, setFilesOpen] = useState(true);
  const [symbolsOpen, setSymbolsOpen] = useState(false);
  const [macrosOpen, setMacrosOpen] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="flex flex-col justify-end md:justify-between gap-y-4 w-full md:h-full md:max-w-lg">
      <div className="flex flex-col justify-end md:justify-start gap-y-4 w-full md:h-full md:max-w-lg">
        <LogoPanel
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <FilePanel
          filesOpen={filesOpen}
          setFilesOpen={setFilesOpen}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <SymbolPanel
          symbolsOpen={symbolsOpen}
          setSymbolsOpen={setSymbolsOpen}
        />
        <MacroPanel
          macrosOpen={macrosOpen}
          setMacrosOpen={setMacrosOpen}
        />
      </div>
      <SettingsPanel
        settingsOpen={settingsOpen}
        setSettingsOpen={setSettingsOpen}
      />
    </div>
  );
}

export default ActionColumn;
