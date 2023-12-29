import React, { ReactNode } from 'react';

interface ResponsePanelRootProps {
  children: ReactNode;
}

export const ResponsePanelRoot: React.FC<ResponsePanelRootProps> = ({
  children,
}) => {
  return <div className="flex flex-col flex-1 bg-secondary">{children}</div>;
};
