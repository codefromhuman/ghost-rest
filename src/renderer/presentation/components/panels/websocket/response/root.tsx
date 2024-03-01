import React, { HTMLAttributes, ReactNode } from 'react';

interface ResponsePanelRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const ResponseRoot: React.FC<ResponsePanelRootProps> = ({
  children,
}) => {
  return <div className="flex flex-1 flex-col bg-secondary">{children}</div>;
};
