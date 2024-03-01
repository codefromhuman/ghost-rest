import { MouseEventHandler, useCallback, useEffect, useState } from 'react';
import { HttpRequestPanel } from './components/Panels/http/request';
import { HttpResponsePanel } from './components/Panels/http/response';
import { CollectionsBar } from './components/CollectionsBar';
import { Sidebar } from './components/Sidebar';
import { Panel } from './components/Panel';
import { Draggable } from './components/Draggable';

interface Widths {
  panelOne: number;
  panelTwo: number;
  panelThree: number;
}

type WidthsKey = keyof Widths;

interface ResizeOptions {
  widthsKey: WidthsKey[];
  dragKey: WidthsKey;
}

export const Content = () => {
  const [widths, setWidths] = useState<Widths>({
    panelOne: 0,
    panelTwo: 0,
    panelThree: 0,
  });

  const [isResizable, setIsResizable] = useState<WidthsKey | null>(null);

  const handleResize = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    { widthsKey, dragKey }: ResizeOptions
  ) => {
    setIsResizable(dragKey);

    const onMove = (event: MouseEvent) => {
      const delta = event.movementX;
      const minWidth = 350;

      setWidths((previous) => {
        const firstWidth = previous[widthsKey[0]] + delta;
        const secondWidth = previous[widthsKey[1]] - delta;

        if (
          (firstWidth < minWidth && firstWidth < previous[widthsKey[0]]) ||
          (secondWidth < minWidth && secondWidth < previous[widthsKey[1]])
        ) {
          return previous;
        }

        return {
          ...previous,
          [widthsKey[0]]: firstWidth,
          [widthsKey[1]]: secondWidth,
        };
      });
    };

    window.addEventListener('pointermove', onMove);

    window.addEventListener('pointerup', () => {
      window.removeEventListener('pointermove', onMove);
      setIsResizable(null);
    });
  };

  const handlePointerDown = useCallback(handleResize, [
    setWidths,
    setIsResizable,
  ]);

  return (
    <div className="flex flex-row flex-1">
      <CollectionsBar />
      <Panel
        setInitialWidth={(panelOne) =>
          setWidths((previous) => ({ ...previous, panelOne }))
        }
        width={widths.panelOne}
      >
        <Sidebar />
      </Panel>
      <Draggable
        isActive={isResizable === 'panelOne'}
        onPointerDown={(event) => {
          handlePointerDown(event, {
            dragKey: 'panelOne',
            widthsKey: ['panelOne', 'panelTwo'],
          });
        }}
      />
      <Panel
        setInitialWidth={(panelTwo) =>
          setWidths((previous) => ({ ...previous, panelTwo }))
        }
        width={widths.panelTwo}
      >
        <HttpRequestPanel />
      </Panel>
      <Draggable
        isActive={isResizable === 'panelTwo'}
        onPointerDown={(event) => {
          handlePointerDown(event, {
            dragKey: 'panelTwo',
            widthsKey: ['panelTwo', 'panelThree'],
          });
        }}
      />
      <Panel
        setInitialWidth={(panelThree) =>
          setWidths((previous) => ({ ...previous, panelThree }))
        }
        width={widths.panelThree}
      >
        <HttpResponsePanel />
      </Panel>
    </div>
  );
};
