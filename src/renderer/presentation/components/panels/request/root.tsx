import { HTMLAttributes, ReactNode } from 'react';

interface RequestPanelRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const RequestPanelRoot: React.FC<RequestPanelRootProps> = ({
  children,
  ...rest
}) => {
  return (
    <div
      className="flex flex-1 flex-col bg-secondary border-r-[1px] border-primary"
      {...rest}
    >
      {children}
    </div>
  );
};
