import React from 'react';
import { Command } from 'lucide-react';
import Collapsible from '../common/Collapsible';

type SymbolPanelProps = {
  symbolsOpen: boolean;
  setSymbolsOpen: (open: boolean) => void;
};

function SymbolPanel({ symbolsOpen, setSymbolsOpen }: SymbolPanelProps) {
  return (
    <Collapsible
      logo={<Command size={24} />}
      title="Symbols"
      open={symbolsOpen}
      setOpen={setSymbolsOpen}
      openClass="max-h-56 md:max-h-full"
      commonClass="overflow-hidden"
    >
      <div className="p-4">
        <div>Symbol</div>
      </div>
    </Collapsible>
  );
}

export default SymbolPanel;
