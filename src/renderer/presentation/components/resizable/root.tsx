import { ReactNode, useCallback, useState } from 'react';

export interface ResizablePanelRootProps {
  children: ReactNode;
}

export const ResizableRoot: React.FC<ResizablePanelRootProps> = ({
  children,
}) => {
  const [state, setState] = useState({
    panel1: 0,
    panel2: 0,
    panel3: 100,
  });
  const [resizeIsActive, setResizeIsActive] = useState<boolean>(false);

  const onMouseDown = useCallback(
    ([key1, key2]: [string, string], dragKey: boolean) =>
      () => {
        setResizeIsActive(dragKey);

        const onMove = (e: MouseEvent) => {
          const { movementX } = e;
          const minWidth = 150;

          setState((x) => {
            const firstWidth = x[key1 as keyof typeof x] + movementX;
            const scndWidth = x[key2 as keyof typeof x] - movementX;

            if (
              (firstWidth < minWidth &&
                firstWidth < x[key1 as keyof typeof x]) ||
              (scndWidth < minWidth && scndWidth < x[key2 as keyof typeof x])
            ) {
              return x;
            }

            return {
              ...x,
              [key1]: firstWidth,
              [key2]: scndWidth,
            };
          });
        };
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', () => {
          window.removeEventListener('mousemove', onMove);
          setResizeIsActive(false);
        });
      },
    [setState, setResizeIsActive]
  );

  return <div>{children}</div>;
};
