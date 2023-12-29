import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export function TabPanelsPanel({ children }: IProps) {
  return <div>{children}</div>;
}
