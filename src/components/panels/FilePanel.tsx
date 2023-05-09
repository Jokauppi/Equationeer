import React from 'react';
import {
  Sun, Moon, Settings, FileCog, File, FilePlus2, FolderPlus, Save,
} from 'lucide-react';
import Collapsible from '../common/Collapsible';

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
        <Save size={24} />,
        <FolderPlus size={24} />,
        <FilePlus2 size={24} />,
        <FileCog size={24} color="dodgerblue" />,
        <Settings size={24} className="md:hidden" />,
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
      <div className="flex flex-col space-y-4 p-4 z-30">
        <div className="p-4 bg-white dark:bg-neutral-800 rounded-xl shadow-md">test</div>
      </div>

    </Collapsible>
  );
}

export default FilePanel;
