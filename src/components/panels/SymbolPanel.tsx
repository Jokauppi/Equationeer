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
      commonClass="overflow-hidden"
    >
      <div className="p-4 grid grid-cols-6">
        <div>Sym</div>
        <div>Sym</div>
        <div>Sym</div>
        <div>Sym</div>
        <div>Sym</div>
        <div>Sym</div>
      </div>
    </Collapsible>
  );
}

export default SymbolPanel;
