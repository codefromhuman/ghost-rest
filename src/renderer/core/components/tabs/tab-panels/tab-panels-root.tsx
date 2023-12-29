import React, { ReactNode } from 'react';
import { CustomTabPanelProps } from '../tabs-root';

interface IProps extends CustomTabPanelProps {
  children: ReactNode;
}

export function TabPanelsRoot({ children, activeTabIndex }: IProps) {
  const mapChildren = (child: ReactNode, index: number): ReactNode => {
    if (React.isValidElement(child) && index === activeTabIndex) {
      return child;
    }
  };

  const renderChildren = React.Children.map(children, mapChildren);

  return <div className="">{renderChildren}</div>;
}
