import React, { ReactNode, useState } from 'react';
import { TabList } from './tab-list';
import { TabPanels } from './tab-panels';

interface IProps {
  children: ReactNode;
}

export interface CustomTabProps {
  handleChangeTabIndex?: (newIndex: number) => void;
  currentIndex?: number;
}

export interface CustomTabPanelProps {
  activeTabIndex?: number;
}

export function TabsRoot({ children }: IProps) {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const handleChangeTabIndex = (newIndex: number) => {
    setActiveTabIndex(newIndex);
  };

  const mapChildren = (child: ReactNode): ReactNode => {
    if (React.isValidElement(child)) {
      if (child.type === TabList.Root) {
        const clonedChild = React.cloneElement(child, {
          handleChangeTabIndex,
        } as CustomTabProps);

        return clonedChild;
      }

      if (child.type === TabPanels.Root) {
        const clonedChild = React.cloneElement(child, {
          activeTabIndex,
        } as CustomTabPanelProps);

        return clonedChild;
      }
    }

    return child;
  };

  const renderChildren = React.Children.map(children, mapChildren);

  return <div className="flex flex-1 flex-col">{renderChildren}</div>;
}
