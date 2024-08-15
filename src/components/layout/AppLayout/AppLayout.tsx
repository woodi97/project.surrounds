import classNames from 'classnames';
import React, { FC, useMemo, useRef } from 'react';

import Header from './Header';

const AppLayout: FC<{
  children: React.ReactNode;
  fullWidth?: boolean;
  fixedHeight?: boolean;
}> = ({ children, fullWidth = false, fixedHeight = false }) => {
  const maxWidth = useMemo(() => 'px-4', []);
  const layoutRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const refinedHeight = getContentHeight()
  //   if (fixedHeight) {
  //     layoutRef.current.style.setProperty('height', `${refinedHeight}px`)
  //   }
  // }, [fixedHeight])

  return (
    <div ref={layoutRef}>
      <Header className={`${maxWidth}`} />
      <main
        className={classNames(
          'z-30 flex flex-col min-h-full m-auto pt-10',
          `${fullWidth ? 'w-full' : 'max-w-screen-2xl'}`
        )}
      >
        <div className="w-full flex-grow">{children}</div>
      </main>
    </div>
  );
};

export default AppLayout;
