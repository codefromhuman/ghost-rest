import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';

export const Collection = () => {
  return (
    <main className="w-screen h-screen flex flex-col">
      <Header />
      <Content />
      <Footer />
    </main>
  );
};
