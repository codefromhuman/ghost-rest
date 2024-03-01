import { FC, HTMLAttributes, ReactNode, useEffect, useRef } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';

export interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  width: number;
  setInitialWidth: (width: number) => void;
}

export const Panel: FC<PanelProps> = ({ children, setInitialWidth, width }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setInitialWidth(ref.current.offsetWidth);
    }
  }, [ref]);

  return (
    <div
      ref={ref}
      className={twJoin('overflow-auto no-scrollbar')}
      style={{ width: width ? `${width}px` : '100%' }}
    >
      {children}
    </div>
  );
};
