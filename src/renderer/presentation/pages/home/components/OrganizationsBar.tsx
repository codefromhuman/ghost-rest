import { faker } from '@faker-js/faker';
import { PlusIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface IOrg {
  avatarUrl: string;
  selected: boolean;
}

export const OrganizationsBar = () => {
  const ORGS: IOrg[] = [
    {
      avatarUrl: faker.image.avatar(),
      selected: false,
    },
    {
      avatarUrl: faker.image.avatar(),
      selected: true,
    },
    {
      avatarUrl: faker.image.avatar(),
      selected: false,
    },
    {
      avatarUrl: faker.image.avatar(),
      selected: false,
    },
    {
      avatarUrl: faker.image.avatar(),
      selected: false,
    },
  ];

  return (
    <aside className="w-16 h-full py-3 bg-secondary border-r-[1px] border-primary flex flex-col items-center">
      {/* Org's Listing */}
      <div className="flex flex-col gap-3">
        {Array.from(ORGS, ({ avatarUrl, selected }, index) => (
          <div
            className={twMerge(
              'w-10 h-10 rounded-full overflow-hidden cursor-pointer',
              `${selected && 'border-primary border-[2px]'}`
            )}
            key={index}
          >
            <img className="w-full h-full" src={avatarUrl} />
          </div>
        ))}
        <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden flex items-center justify-center cursor-pointer">
          <PlusIcon className="text-gray-300" />
        </div>
      </div>
    </aside>
  );
};
