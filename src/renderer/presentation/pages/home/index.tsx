import { Card } from 'renderer/presentation/components/collection/card';
import { Header } from './components/Header';
import { OrganizationsBar } from './components/OrganizationsBar';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';

export const Home = () => {
  return (
    <main className="w-screen h-screen flex flex-col">
      <Header />
      <div className="flex flex-row flex-1">
        <OrganizationsBar />
        <Sidebar />
        <div className="w-full h-full grid grid-cols-5 grid-rows-5 gap-5 p-5 bg-secondary">
          {Array.from({ length: 25 }, () => (
            <Card.Root />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};
