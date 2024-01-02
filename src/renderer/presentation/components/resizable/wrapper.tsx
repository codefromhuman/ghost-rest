import { ReactNode } from 'react';

interface ResizableWrapperProps {
  children: ReactNode;
}

export const ResizableWrapper = ({ children }: ResizableWrapperProps) => {
  return <div>{children}</div>;
};
