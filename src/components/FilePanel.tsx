import React from 'react';
import {
  Sun, Moon, Settings, FileCog, File,
} from 'lucide-react';
import Collapsible from './Collapsible';

type FilePanelProps = {
  filesOpen: boolean;
  setFilesOpen: (open: boolean) => void;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
};

function FilePanel({
  filesOpen, setFilesOpen, darkMode, setDarkMode,
}: FilePanelProps) {
  return (
    <Collapsible
      logo={<File size={24} />}
      title="Files"
      open={filesOpen}
      setOpen={setFilesOpen}
      buttons={[
        <FileCog size={24} color="dodgerblue" />,
        <Settings size={24} className="block md:hidden" />,
        <button
          className="block md:hidden"
          type="button"
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          {darkMode ? (
            <Sun size={24} color="gold" />
          ) : (
            <Moon size={24} color="mediumslateblue" />
          )}
        </button>,
      ]}
    >
      <div className="pb-4">test</div>
    </Collapsible>
  );
}

export default FilePanel;
