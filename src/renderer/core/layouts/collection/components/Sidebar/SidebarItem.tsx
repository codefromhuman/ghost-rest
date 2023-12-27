import { ChevronDownIcon, ChevronUpIcon, MoreVerticalIcon } from 'lucide-react';
import React, { useState } from 'react';

interface IItem {
  label: string;
  variant: 'request' | 'folder';
  type?: 'get' | 'post' | 'patch' | 'put' | 'delete' | 'options';
  items?: IItem[];
}

interface IProps {
  item: IItem;
}

export function SideBarItem({ item }: IProps) {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  function toggleCollapse() {
    setCollapsed(!collapsed);
  }

  function renderChildren(children: IItem[] | undefined) {
    if (!children || children.length === 0) return null;

    {
      children.map((child, index) => <SideBarItem key={index} item={child} />);
    }
  }

  return (
    <React.Fragment>
      {item.variant === 'folder' ? (
        <React.Fragment>
          <div className="w-full flex flex-row gap-2a justify-between items-center">
            <button
              className="flex flex-row gap-2 items-center"
              onClick={toggleCollapse}
            >
              {collapsed ? (
                <ChevronUpIcon className="text-white" size={20} />
              ) : (
                <ChevronDownIcon className="text-white" size={20} />
              )}
              <span className="text-white">{item.label}</span>
            </button>
            <button>
              <MoreVerticalIcon className="text-white" size={20} />
            </button>
          </div>
          {collapsed && (
            <div className="flex flex-col gap-2">
              {item.items?.map((item, index) => (
                <SideBarItem key={index} item={item} />
              ))}
            </div>
          )}
        </React.Fragment>
      ) : (
        <div className="flex flex-row gap-2 justify-between">
          <div className="flex flex-row gap-2">
            <span className={'uppercase font-bold text-white'}>
              {item.type}
            </span>
            <p className="text-white">{item.label}</p>
          </div>
          <button>
            <MoreVerticalIcon className="text-white" size={20} />
          </button>
        </div>
      )}
      {renderChildren(item.items)}
    </React.Fragment>
  );
}
