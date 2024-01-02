import { HTMLAttributes, ReactNode } from 'react';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const SidebarRoot = ({ children, ...rest }: IProps) => {
  return (
    <div
      className="min-w-[300px] h-full bg-secondary border-r-[1px] border-primary flex flex-col"
      {...rest}
    >
      {children}
    </div>
  );
};
