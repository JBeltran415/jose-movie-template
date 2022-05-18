import {Link }from 'react-router-dom'
import "./Header.css";
function Header() {
  return (
    <nav className='nav-bar'>
      <div className="header-wrapper">
        <div className="logo">
            LOGO
        </div>
        <button className="profile-button">
            <Link to="/profile">Profile</Link>
        </button>
        <p className="your-movies">Your Movies</p>
      </div>
    </nav>
  );
}

export default Header;
