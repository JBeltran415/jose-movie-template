import {Link }from 'react-router-dom'

function Header() {
  return (
    <nav>
      <div className="header-wrapper">
        <div className="">
            LOGO
        </div>
        <button>
            <Link to="/profile">Profile</Link>
        </button>
      </div>
    </nav>
  );
}

export default Header;
