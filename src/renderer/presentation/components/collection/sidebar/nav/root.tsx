import {} from 'classnames';
import { FilterIcon, LucideIcon, PlusIcon, SearchIcon } from 'lucide-react';
import { MOCK_REQUESTS } from 'renderer/presentation/mocks/requests';
import { NavItem } from './item';

interface IMenuOption {
  icon: LucideIcon;
  handler: () => void;
}

export const NavRoot = () => {
  const MENU_OPTIONS: IMenuOption[] = [
    {
      icon: SearchIcon,
      handler: () => {},
    },
    {
      icon: FilterIcon,
      handler: () => {},
    },
    {
      icon: PlusIcon,
      handler: () => {},
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
    <div className="min-w-[300px] h-full border-primary flex flex-col">
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
          {Array.from(MOCK_REQUESTS, (item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </div>
      </div>
      <div className="flex flex-col flex-1">
        {/* Project Header */}
        <div className="p-3 flex flex-row justify-between">
          <span className="text-sm text-white uppercase font-bold">
            Teams (2)
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
          {Array.from(MOCK_REQUESTS, (item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
