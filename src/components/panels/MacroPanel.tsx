import React from 'react';
import { CurlyBraces } from 'lucide-react';
import Collapsible from '../common/Collapsible';

type MacroPanelProps = {
  macrosOpen: boolean;
  setMacrosOpen: (open: boolean) => void;
};

function MacroPanel({ macrosOpen, setMacrosOpen }: MacroPanelProps) {
  return (
    <Collapsible
      logo={<CurlyBraces size={24} />}
      title="Macros"
      open={macrosOpen}
      setOpen={setMacrosOpen}
    >
      <div className="p-4">macro</div>
    </Collapsible>
  );
}

export default MacroPanel;
