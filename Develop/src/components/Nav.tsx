
import { Link, useLocation } from 'react-router-dom';
import '../../stylePages/Nav.css';

    // TODO: Add necessary code to display the navigation bar and link between the pages

  function Nav() {
    const currentPage = useLocation().pathname;
  return (
    <nav className='nav-tabs'>
      <ul className='nav'>
        <li>
        <Link to="/" className={currentPage === '/' ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link to="/SavedCandidates" className={currentPage === '/SavedCandidates' ? 'active' : ''}
          >Potential Candidates</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
