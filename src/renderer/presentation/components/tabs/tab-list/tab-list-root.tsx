import React, { ReactNode } from 'react';
import { CustomTabProps } from '../tabs-root';

interface TabListRootProps extends CustomTabProps {
  children: ReactNode;
}

export function TabListRoot({
  children,
  handleChangeTabIndex,
}: TabListRootProps) {
  const mapChildren = (child: ReactNode, index: number): ReactNode => {
    if (React.isValidElement(child)) {
      const clonedChild = React.cloneElement(child, {
        handleChangeTabIndex,
        currentIndex: index,
      } as CustomTabProps);

      return clonedChild;
    }

    return child;
  };

  const renderChildren = React.Children.map(children, mapChildren);

  return (
    <div className="w-full h-14 border-b-[1px] border-primary flex flex-row items-center">
      {renderChildren}
    </div>
  );
}
