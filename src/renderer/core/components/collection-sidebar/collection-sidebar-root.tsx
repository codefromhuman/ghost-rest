import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export const CollectionSidebarRoot = ({ children }: IProps) => {
  return <div>{children}</div>;
};
