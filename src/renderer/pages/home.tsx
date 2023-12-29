import { CollectionCard } from 'renderer/core/components/collection-card';

export function Home() {
  return (
    <div className="w-full h-full grid grid-cols-5 grid-rows-5 gap-5 p-5 bg-secondary">
      {Array.from({ length: 25 }, () => (
        <CollectionCard.Root />
      ))}
    </div>
  );
}
