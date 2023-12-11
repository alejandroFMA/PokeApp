
import { Link } from "react-router-dom";

const Nav = () => {

  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return(
    <nav>
      
      <ul className="nav-bar">
        <li className="nav-link">
          <Link to="/" 
          className="nav-link-active"
          onClick={scrollToTop}
          >Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/search" 
          className="nav-link"
          onClick={scrollToTop}
          >Search</Link>
        </li>
        <li className="nav-link">
          <Link to="/create" 
          className="nav-link"
          onClick={scrollToTop}
          >
            Create Pokemon</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
