import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

export function CollectionLayout() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="flex flex-row flex-1">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
