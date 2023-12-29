import { faker } from '@faker-js/faker';
import { PlusIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface IOrg {
  avatarUrl: string;
  selected: boolean;
}

export const CollectionAsideRoot = () => {
  const COLLECTIONS: IOrg[] = [
    {
      avatarUrl: faker.image.avatarGitHub(),
      selected: false,
    },
    {
      avatarUrl: faker.image.avatarGitHub(),
      selected: true,
    },
    {
      avatarUrl: faker.image.avatarGitHub(),
      selected: false,
    },
    {
      avatarUrl: faker.image.avatarGitHub(),
      selected: false,
    },
    {
      avatarUrl: faker.image.avatarGitHub(),
      selected: false,
    },
  ];

  return (
    <aside className="w-16 h-full py-3 bg-secondary border-r-[1px] border-primary flex flex-col items-center">
      {/* Org's Listing */}
      <div className="flex flex-col gap-3">
        {Array.from(COLLECTIONS, ({ avatarUrl, selected }, index) => (
          <div
            className={twMerge(
              'w-10 h-10 rounded-lg overflow-hidden cursor-pointer',
              `${selected && 'border-accent border-[2.5px]'}`
            )}
            key={index}
          >
            <img className="w-full h-full" src={avatarUrl} />
          </div>
        ))}
        <div className="w-10 h-10 rounded-lg bg-black/20 overflow-hidden flex items-center justify-center cursor-pointer">
          <PlusIcon className="text-gray-300" />
        </div>
      </div>
    </aside>
  );
};
