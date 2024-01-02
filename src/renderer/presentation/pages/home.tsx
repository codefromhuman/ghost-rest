import { Card } from 'renderer/presentation/components/collection/card';

export function Home() {
  return (
    <div className="w-full h-full grid grid-cols-5 grid-rows-5 gap-5 p-5 bg-secondary">
      {Array.from({ length: 25 }, () => (
        <Card.Root />
      ))}
    </div>
  );
}
