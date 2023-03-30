import React from 'react';
import Box from './common/Box';
import KaTeXBox from './KaTeXBox';

function PageColumn() {
  return (
    <div className="overflow-hidden rounded-lg">
      <div className="h-full font-serif overflow-y-auto scrollbar-none md:scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-neutral-700 scrollbar-track-transparent">
        <div className="h-full flex flex-col items-center gap-y-4">
          <Box fit className="flex flex-col items-center">
            <h1 className="text-3xl text-black dark:text-white">Title</h1>
            <p>Author</p>
          </Box>
          {/* eslint-disable max-len */}
          <Box fit>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id accumsan nisl, eu eleifend ligula. Pellentesque id mi libero. Pellentesque arcu dolor, efficitur eu placerat a, rutrum a eros. In at metus vitae sapien tempor convallis. Cras urna nisi, laoreet a ultrices sed, vestibulum vel dolor. Maecenas eget eros sit amet metus commodo accumsan. Mauris gravida, lectus id elementum convallis, orci neque congue tortor, id luctus lorem ex non justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In at mauris porta, lobortis nisi sed, pharetra risus. In dignissim, neque et laoreet molestie, risus diam faucibus justo, sed posuere elit quam congue lorem. Cras mauris nibh, convallis vestibulum viverra sed, sodales eget ante. Curabitur in aliquet lectus. Nam ut enim et erat ullamcorper fermentum quis non ante.</p>
          </Box>
          <KaTeXBox />
        </div>
      </div>
    </div>
  );
}

export default PageColumn;
