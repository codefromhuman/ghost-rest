import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import { Collection } from './presentation/pages/collection';
import { Home } from './presentation/pages/home';
import './presentation/styles/index.css';

export default function App() {
  return (
    <main className="select-none no-scrollbar bg-secondary">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection/:id" element={<Collection />} />
        </Routes>
      </Router>
    </main>
  );
}
