import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import { MainLayout } from 'renderer/core/layouts';
import { Collection } from './presentation/pages/collection';
import { Home } from './presentation/pages/home';
import './presentation/styles/index.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/collection/:id" element={<Collection />} />
      </Routes>
    </Router>
  );
}
