import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Categories from './pages/Categories'
import ElementDetails from './pages/ElementDetails'

function App() {
  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/characters">Characters</Link></li>
        <li><Link to="/locations">Locations</Link></li>
        <li><Link to="/episodes">Episodes</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters">
          <Route index element={<Categories />} />
          <Route path="/characters/:id" element={<ElementDetails />} />
        </Route>
        <Route path="/locations">
          <Route index element={<Categories />} />
          <Route path="/locations/:id" element={<ElementDetails />} />
        </Route>
        <Route path="/episodes">
          <Route index element={<Categories />} />
          <Route path="/episodes/:id" element={<ElementDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;