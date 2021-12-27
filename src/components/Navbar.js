import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css'

export function Navbar() {
  const [page, setPage] = useState(1);

  return (
    <nav className='Navbar'>
      <ul className='Navbar__Ul'>
        <li className='Navbar__Ul__Li'>
          <Link to="/" className={`Navbar__Ul__Li__Link ${page === 1 ? 'Current' : ''}`} onClick={() => setPage(1)}>Home</Link>
        </li>
        <li className='Navbar__Ul__Li'>
          <Link to="/about" className={`Navbar__Ul__Li__Link ${page === 2 ? 'Current' : ''}`} onClick={() => setPage(2)}>About</Link>
        </li>
      </ul>
    </nav>
  )
}
