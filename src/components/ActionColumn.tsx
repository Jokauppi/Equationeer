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
    <div className="flex flex-col justify-end w-full h-fit md:h-full md:max-w-lg overflow-hidden">
      <div className="p-4 md:pr-2 pb-0 hidden md:flex">
        <LogoPanel
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>
      <div className="flex flex-col h-full justify-start p-4 md:pr-2 gap-y-4 overflow-hidden">
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
      <div className="p-4 md:pr-2 pt-0 hidden md:flex">
        <SettingsPanel
          settingsOpen={settingsOpen}
          setSettingsOpen={setSettingsOpen}
        />
      </div>
    </div>
  );
}

export default ActionColumn;
