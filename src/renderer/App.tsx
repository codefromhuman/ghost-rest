import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import { MainLayout } from 'renderer/core/layouts';
import { CollectionLayout } from './core/layouts/collection';
import { Collections } from './pages/Collections';
import { Collection } from './pages/Collections/Collection';
import './styles/index.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Collections />} />
        </Route>
        <Route path="/collection" element={<CollectionLayout />}>
          <Route path="/collection/:id" element={<Collection />} />
        </Route>
      </Routes>
    </Router>
  );
}
