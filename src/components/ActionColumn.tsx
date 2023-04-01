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
    <div className="flex flex-col justify-end md:justify-start gap-y-4 w-full md:h-full md:max-w-lg">
      <div className="flex flex-col justify-end md:justify-between w-full md:h-full md:max-w-lg">
        <div className="p-4 pb-0">
          <LogoPanel
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </div>
        <div className="flex flex-col max-h-full h-full justify-start p-4 gap-y-4 overflow-y-hidden">
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
        <div className="p-4 pt-0">
          <SettingsPanel
            settingsOpen={settingsOpen}
            setSettingsOpen={setSettingsOpen}
          />
        </div>
      </div>
    </div>
  );
}

export default ActionColumn;
