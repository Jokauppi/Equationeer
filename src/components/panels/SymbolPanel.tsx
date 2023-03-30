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
      <div className="h-full mt-2 overflow-y-auto scrollbar-none">
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </div>
    </Collapsible>
  );
}

export default SymbolPanel;
