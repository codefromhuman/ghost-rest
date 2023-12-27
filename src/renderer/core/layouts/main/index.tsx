import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { OrgsBar } from './components/OrgsBar';
import { Sidebar } from './components/Sidebar';

export function MainLayout() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="flex flex-row flex-1">
        <OrgsBar />
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
