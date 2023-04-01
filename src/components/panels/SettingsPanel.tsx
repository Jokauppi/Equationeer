import React from 'react';
import { Settings, User } from 'lucide-react';
import Collapsible from '../common/Collapsible';

type SettingsPanelProps = {
  settingsOpen: boolean;
  setSettingsOpen: (open: boolean) => void;
};

function SettingsPanel({ settingsOpen, setSettingsOpen }: SettingsPanelProps) {
  return (
    <Collapsible
      logo={<User size={24} color="dodgerblue" />}
      title="User"
      open={settingsOpen}
      setOpen={setSettingsOpen}
      openClass="h-fit shrink-0"
      commonClass="hidden md:flex flex-grow"
      openAbove
      openSymbols={[
        <Settings size={24} className="rotate-90" />,
        <Settings size={24} />,
      ]}
    >
      <div className="p-4">Settings</div>
    </Collapsible>
  );
}

export default SettingsPanel;
