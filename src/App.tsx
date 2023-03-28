import React from 'react';
import ViteLogo from './assets/vite.svg';
import Box from './components/Box';

function App() {
  return (
    <div className="App w-screen h-screen font-sans text-black bg-slate-150">
      <div className="flex flex-row justify-between gap-x-4 p-4 w-full h-full">
        <div className="flex flex-col gap-y-4 w-96 h-full">
          <Box fit>
            <p className="font-bold text-xl">WYMeX Notes</p>
          </Box>
          <div className="h-full overflow-hidden rounded-xl">
            <div className="flex flex-col gap-y-4 h-full overflow-y-auto scrollbar-none">
              <Box fit>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim aliquet
                  augue at malesuada. Integer quis turpis in nisi consequat porta eget non odio.
                  Vestibulum eros est, faucibus vel risus eget, convallis sollicitudin ligula.
                  Cras id ornare erat. Praesent blandit ac magna vel lobortis. Etiam quis tempus
                  arcu. Quisque malesuada ex vitae ex congue, non gravida erat egestas. Vivamus
                  auctor odio nec efficitur eleifend. Aenean vel diam mattis, tempor mi a,
                  consectetur dui. Cras et hendrerit ligula. Orci varius natoque penatibus et
                  magnis dis parturient montes, nascetur ridiculus mus.
                </p>
              </Box>
              <Box fit>
                <p>
                  Sed a vehicula turpis, eu blandit ex. Aliquam auctor a nibh sit amet consequat.
                  Sed eu nisi non ante venenatis maximus. Sed eu diam ac lectus rutrum hendrerit
                  scelerisque quis neque. Proin euismod, ex quis dapibus pharetra, nunc arcu blandit
                  erat, id luctus mi velit non urna. Pellentesque pretium posuere neque quis
                  elementum. Maecenas pellentesque luctus lacus.
                </p>
              </Box>
              <Box fit>
                <p>
                  Mauris mollis sem sit amet elit convallis euismod. Donec mollis arcu nec finibus
                  sagittis. Mauris condimentum viverra felis nec lobortis. Nunc convallis justo eget
                  augue tempor finibus. Maecenas luctus odio eget tortor cursus rutrum. Integer eget
                  commodo erat. Quisque placerat tempus nibh nec porttitor. Duis sed faucibus massa.
                  Donec consequat euismod faucibus. Class aptent taciti sociosqu ad litora torquent
                  per conubia nostra, per inceptos himenaeos. Proin leo dolor, vestibulum eu rutrum
                  et, malesuada eget magna. Pellentesque habitant morbi tristique senectus et
                  netus et malesuada fames ac turpis egestas. Proin commodo urna sed nisi
                  condimentum, eu molestie risus porttitor. Maecenas molestie fringilla magna sed
                  sollicitudin. Vivamus in mauris ac velit porta facilisis.
                </p>
              </Box>
              <Box fit>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim aliquet
                  augue at malesuada. Integer quis turpis in nisi consequat porta eget non odio.
                  Vestibulum eros est, faucibus vel risus eget, convallis sollicitudin ligula.
                  Cras id ornare erat. Praesent blandit ac magna vel lobortis. Etiam quis tempus
                  arcu. Quisque malesuada ex vitae ex congue, non gravida erat egestas. Vivamus
                  auctor odio nec efficitur eleifend. Aenean vel diam mattis, tempor mi a,
                  consectetur dui. Cras et hendrerit ligula. Orci varius natoque penatibus et
                  magnis dis parturient montes, nascetur ridiculus mus.
                </p>
              </Box>
              <Box fit>
                <p>
                  Sed a vehicula turpis, eu blandit ex. Aliquam auctor a nibh sit amet consequat.
                  Sed eu nisi non ante venenatis maximus. Sed eu diam ac lectus rutrum hendrerit
                  scelerisque quis neque. Proin euismod, ex quis dapibus pharetra, nunc arcu blandit
                  erat, id luctus mi velit non urna. Pellentesque pretium posuere neque quis
                  elementum. Maecenas pellentesque luctus lacus.
                </p>
              </Box>
              <Box fit>
                <p>
                  Mauris mollis sem sit amet elit convallis euismod. Donec mollis arcu nec finibus
                  sagittis. Mauris condimentum viverra felis nec lobortis. Nunc convallis justo eget
                  augue tempor finibus. Maecenas luctus odio eget tortor cursus rutrum. Integer eget
                  commodo erat. Quisque placerat tempus nibh nec porttitor. Duis sed faucibus massa.
                  Donec consequat euismod faucibus. Class aptent taciti sociosqu ad litora torquent
                  per conubia nostra, per inceptos himenaeos. Proin leo dolor, vestibulum eu rutrum
                  et, malesuada eget magna. Pellentesque habitant morbi tristique senectus et
                  netus et malesuada fames ac turpis egestas. Proin commodo urna sed nisi
                  condimentum, eu molestie risus porttitor. Maecenas molestie fringilla magna sed
                  sollicitudin. Vivamus in mauris ac velit porta facilisis.
                </p>
              </Box>
            </div>
          </div>
          <Box fit>
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
              <img src={ViteLogo} className="logo" alt="Vite logo" />
            </a>
          </Box>
        </div>
        <Box>
          <h1 className="text-3xl">Test</h1>
          <p>lorem ipsum dolor sit amet</p>
        </Box>
      </div>
    </div>
  );
}

export default App;
