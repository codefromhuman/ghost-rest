import {
  BrainCircuitIcon,
  ChevronDownIcon,
  FilterIcon,
  FolderClosedIcon,
  FolderOpenIcon,
  LucideIcon,
  MoreVerticalIcon,
  PlusIcon,
  SearchIcon,
  Settings2Icon,
} from 'lucide-react';
import { Fragment, useState } from 'react';
import { IItem, MOCK_REQUESTS } from 'renderer/presentation/mocks/requests';
import { twMerge } from 'tailwind-merge';
import { NavItem } from './components/nav/item';
import { Nav } from './components/nav';

interface IMenuOption {
  icon: LucideIcon;
  handler: () => void;
}

export const Sidebar = () => {
  return (
    <div className="flex flex-1 flex-col">
      {/* Header */}
      <div className="bg-secondary">
        {/* Manage Envs */}
        <div className="w-full p-3 flex flex-row gap-3">
          <div className="flex flex-1 px-3 border-[1px] bg-transparent border-primary text-white items-center justify-between">
            <div className="flex flex-row gap-2 items-center">
              <div className="w-6 h-6 bg-red-500 flex items-center justify-center">
                <BrainCircuitIcon className="" size={16} />
              </div>
              <span>Development</span>
            </div>
            <ChevronDownIcon size={20} />
          </div>
          <button className="w-10 h-10 border-[1px] border-primary flex items-center justify-center">
            <Settings2Icon className="text-white" size={20} />
          </button>
        </div>
      </div>
      {/* Nav */}
      <Nav.Root />
    </div>
  );
};
