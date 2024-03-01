import React, { useCallback, useMemo } from 'react';
import { Minimize2Icon, MinusIcon, SquareIcon, XIcon } from 'lucide-react';

import { remote } from 'electron';
import os from 'os';

import { useConfig } from '../../main/hooks/useConfig';

export const Header: React.FC = () => {
  const handleCloseWindow = useCallback(() => {
    const window = remote.getCurrentWindow();

    window.close();
  }, []);

  const handleMaximize = useCallback(() => {
    const window = remote.getCurrentWindow();

    const isMacSystem = os.platform() === 'darwin';

    if (isMacSystem) {
      return window.setFullScreen(!window.isFullScreen());
    }

    const { width: currentWidth, height: currentHeight } = window.getBounds();

    const { width: maxWidth, height: maxHeight } =
      remote.screen.getPrimaryDisplay().workAreaSize;

    const isMaximized =
      currentWidth === maxWidth && currentHeight === maxHeight;

    if (!isMaximized) {
      window.maximize();
    } else {
      window.unmaximize();
    }
  }, []);

  const handleMinimize = useCallback(() => {
    const window = remote.getCurrentWindow();

    window.minimize();
  }, []);

  const useMacOSWindowActionButtons = useConfig('useMacOSWindowActionButtons');

  const shouldUseMacOSWindowActions = useMemo(() => {
    return useMacOSWindowActionButtons || os.platform() === 'darwin';
  }, [useMacOSWindowActionButtons]);

  return (
    <div>
      <strong>Ghost Rest</strong>

      {shouldUseMacOSWindowActions ? (
        <div>
          <div color="close" onClick={handleCloseWindow}>
            <XIcon />
          </div>
          <div color="minimize" onClick={handleMinimize}>
            <MinusIcon />
          </div>
          <div color="maximize" onClick={handleMaximize}>
            <Minimize2Icon />
          </div>
        </div>
      ) : (
        <div>
          <div onClick={handleMinimize}>
            <MinusIcon />
          </div>
          <div onClick={handleMaximize}>
            <SquareIcon />
          </div>
          <div onClick={handleCloseWindow}>
            <XIcon />
          </div>
        </div>
      )}
    </div>
  );
};
