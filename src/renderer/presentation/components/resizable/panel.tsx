import { ReactNode, useEffect, useRef } from 'react';

interface ResizablePanelProps {
  children: ReactNode;
  width: number;
  setInitialWidth: (width: number) => void;
}

export const ResizablePanel = ({
  children,
  width,
  setInitialWidth,
}: ResizablePanelProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setInitialWidth(ref.current.offsetWidth);
    }
  }, [ref]);

  return (
    <div ref={ref} style={{ width: width ? `${width}px` : '100%' }}>
      {children}
    </div>
  );
};
