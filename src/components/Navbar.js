import { NavLink } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import NavStyles from '../styles/NavBar.module.css';

const NavBar = () => (
  <div className={NavStyles.barContainer}>
    <div className={NavStyles.navBarContainer}>
      <nav className={NavStyles.navLinksContainer}>
        <h1>
          <NavLink className="fontStyle6 fontColor3 mr2" to="/">Bookstore CMS</NavLink>
        </h1>
        <p>
          <NavLink className="fontStyle7 fontColor1 mr1" to="/">Books</NavLink>
        </p>
        <p>
          <NavLink className="fontStyle5 fontColor1" to="/categories">Categories</NavLink>
        </p>
      </nav>
      <div>
        <FaRegUserCircle style={{ color: '#0290ff' }} />
      </div>
    </div>
  </div>
);

export default NavBar;
