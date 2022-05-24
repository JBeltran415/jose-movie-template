import {Link }from 'react-router-dom'
import "./Header.css";
function Header() {
  return (
    <nav className='nav-bar'>
      <div className="header-wrapper">
        <Link to="/" className="logo-link">
        <div className="logo">
            LOGO
        </div>
        </Link>
        
        <Link to="/profile">
        <button className="profile-button">
            Profile
        </button>
        </Link>
        
        
      </div>
      <p className="movies-title">Your Movies</p>
    </nav>
  );
}

export default Header;
