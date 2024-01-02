import {
  FolderClosedIcon,
  FolderOpenIcon,
  MoreVerticalIcon,
} from 'lucide-react';
import React, { HTMLAttributes, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface IItem {
  label: string;
  variant: 'request' | 'folder';
  type?: 'get' | 'post' | 'patch' | 'put' | 'delete' | 'options';
  items?: IItem[];
}

interface IProps extends HTMLAttributes<HTMLDivElement> {
  item: IItem;
  depth?: number;
}

export const NavItem: React.FC<IProps> = ({
  item,
  depth = 0,
  className,
  ...rest
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  function toggleCollapse() {
    setCollapsed(!collapsed);
  }

  function renderChildren(children: IItem[] | undefined, childDepth: number) {
    if (!children || children.length === 0) return null;

    return children.map((child, index) => (
      <NavItem key={index} item={child} depth={childDepth + 1} />
    ));
  }

  return (
    <React.Fragment>
      {item.variant === 'folder' ? (
        <React.Fragment>
          <div
            {...rest}
            style={{ marginLeft: `${depth * 12}px` }}
            className={twMerge(
              'w-full flex flex-row gap-2 justify-between items-center',
              className
            )}
          >
            <button
              className="flex flex-row gap-2 items-center"
              onClick={toggleCollapse}
            >
              {collapsed ? (
                <FolderOpenIcon className="text-white" size={20} />
              ) : (
                <FolderClosedIcon className="text-white" size={20} />
              )}
              <span className="text-white">{item.label}</span>
            </button>
            <button className="hidden hover:flex">
              <MoreVerticalIcon className="text-white" size={20} />
            </button>
          </div>
          {collapsed && renderChildren(item.items, depth + 1)}
        </React.Fragment>
      ) : (
        <div
          style={{ marginLeft: `${depth * 12}px` }}
          className={twMerge('flex flex-row gap-2 justify-between', className)}
        >
          <div className="flex flex-row gap-2">
            <span className={'uppercase font-bold text-white'}>
              {item.type}
            </span>
            <p className="text-white">{item.label}</p>
          </div>
          <button className="hidden hover:block">
            <MoreVerticalIcon className="text-white" size={20} />
          </button>
        </div>
      )}
    </React.Fragment>
  );
};
