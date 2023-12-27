import {} from 'classnames';
import {
  Edit3Icon,
  LucideIcon,
  MessageSquareIcon,
  PlusIcon,
  SearchIcon,
} from 'lucide-react';
import { SideBarItem } from './SidebarItem';

interface IMenuOption {
  icon: LucideIcon;
  handler: () => void;
}

interface IOrgOption {
  icon: LucideIcon;
  label: string;
  handler: () => void;
}

interface IItem {
  label: string;
  variant: 'request' | 'folder';
  type?: 'get' | 'post' | 'patch' | 'put' | 'delete' | 'options';
  items?: IItem[];
}

export function Sidebar() {
  const MENU_OPTIONS: IMenuOption[] = [
    {
      icon: SearchIcon,
      handler: () => {},
    },
    {
      icon: PlusIcon,
      handler: () => {},
    },
  ];

  const ORG_OPTIONS: IOrgOption[] = [
    {
      icon: PlusIcon,
      handler: () => {},
      label: 'Invite people to organization',
    },
    {
      icon: Edit3Icon,
      handler: () => {},
      label: 'Manage teams and permissions',
    },
    {
      icon: MessageSquareIcon,
      handler: () => {},
      label: 'Help and feedbacks',
    },
  ];

  const ITEMS: IItem[] = [
    {
      label: 'NO_NAME',
      variant: 'request',
      type: 'post',
    },
    {
      label: 'users',
      variant: 'folder',
      items: [
        {
          label: 'findAll',
          variant: 'request',
          type: 'get',
        },
        {
          label: 'findOne',
          variant: 'request',
          type: 'get',
        },
        {
          label: 'create',
          variant: 'request',
          type: 'post',
        },
        {
          label: 'update',
          variant: 'request',
          type: 'patch',
        },
        {
          label: 'destroy',
          variant: 'request',
          type: 'delete',
        },
      ],
    },
  ];

  const HTTP_METHOD_COLORS = {
    get: '#362FD9',
    post: '#27E1C1',
    put: '#FFD93D',
    patch: '#7149C6',
    delete: '#EA5455',
    options: '#C9EEFF',
  };

  return (
    <div className="min-w-[300px] h-full bg-secondary border-r-[1px] flex flex-col">
      {/* Project Bar */}
      <div className="flex flex-col flex-1">
        {/* Project Header */}
        <div className="p-3 flex flex-row justify-between">
          <span className="text-sm text-white uppercase font-bold">
            Projects (2)
          </span>
          <div className="flex flex-row gap-2">
            {Array.from(MENU_OPTIONS, ({ handler, icon: Icon }, index) => (
              <button key={index} onClick={handler}>
                <Icon className="text-white" size={20} />
              </button>
            ))}
          </div>
        </div>
        {/* Item List */}
        <div className="p-3 flex flex-col flex-1 gap-3">
          {Array.from(ITEMS, (item, index) => (
            <SideBarItem key={index} item={item} />
          ))}
        </div>
      </div>
      {/* Org Options */}
      <div className="w-full h-fit p-3 flex flex-col gap-3">
        {Array.from(ORG_OPTIONS, ({ handler, icon: Icon, label }, index) => (
          <button className="flex flex-row gap-3" onClick={handler} key={index}>
            <Icon className="text-white" />
            <span className="text-white">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
