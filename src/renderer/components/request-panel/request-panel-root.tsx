import { ReactNode } from 'react';

interface RequestPanelRootProps {
  children: ReactNode;
}

export const RequestPanelRoot: React.FC<RequestPanelRootProps> = ({
  children,
}) => {
  return (
    <div className="flex flex-col flex-1 bg-secondary border-r-[1px] border-primary">
      {children}
    </div>
  );
};
