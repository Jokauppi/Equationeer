import React from 'react';
import { Moon, Sun } from 'lucide-react';
import Box from '../common/Box';

type LogoPanelProps = {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
};

function LogoPanel({ darkMode, setDarkMode }: LogoPanelProps) {
  return (
    <Box fit className="hidden md:flex">
      <div className="w-full flex flex-row justify-between content-center gap-x-2">
        <p className="font-serif text-xl text-black dark:text-yellow-400">
          EQUΛTIONEER
          <sup className="text-blue-500 dark:text-neutral-300 text-md font-mono">Dev</sup>
        </p>
        <button
          type="button"
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          {darkMode ? (
            <Sun size={24} color="#facc15" />
          ) : (
            <Moon size={24} color="black" />
          )}
        </button>
      </div>
    </Box>
  );
}

export default LogoPanel;
