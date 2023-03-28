import React from 'react';
import ViteLogo from './assets/vite.svg';

function App() {
  return (
    <div className="App w-screen h-screen font-sans text-black bg-slate-200">
      <div className="flex flex-row gap-4 p-4 w-full h-full">
        <div className="bg-white rounded-xl">
          <div className="p-4">
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
              <img src={ViteLogo} className="logo" alt="Vite logo" />
            </a>
          </div>
        </div>
        <div className="bg-white w-full p-4 rounded-xl">
          <h1>Test</h1>
          <p>lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  );
}

export default App;
