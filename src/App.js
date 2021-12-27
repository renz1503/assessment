import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Product } from './components/Product';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />}/>
          <Route path="/detalle/:productId" element={<Product />} />
          <Route path={"/about"} element={<About />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
