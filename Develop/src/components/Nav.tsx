
import { Link, useLocation } from 'react-router-dom';

// const Nav = () => {
    // TODO: Add necessary code to display the navigation bar and link between the pages

  function Nav() {
    const currentPage = useLocation().pathname;
  return (
    <nav>
      <ul>
        <li>
          <Link to="/CandidateSearch" className={currentPage === '/CandidateSearch' ? 'active' : ''}>
          Candidate Search</Link>
        </li>
        <li>
          <Link to="/SavedCandidates" className={currentPage === '/SavedCandidates' ? 'active' : ''}
          >Saved Candidates</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
