import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
function Navbar() {
  const {isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const handleClick = async () => {
    if (isAuthenticated) {
    navigate('/create/listing');
    } else {
      await loginWithRedirect({
        appState: { returnTo: '/' }
      });
    }
  };

  return (
    <>
    <div className="navbar bg-base-100 bg-gray-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link to="/Influencer/Homepage">Influencer</Link></li>
        <li><Link to="/rojgar/home">Rojgar</Link></li>
        <li><Link to="/Property/Homepage">Property</Link></li>
        <li><Link to="/" className="hover:text-primary transition-all duration-200">Busniess</Link></li>
        </ul>
    </div>
    <Link to="/" className="btn btn-ghost hidden md:block py-1 text-2xl text-cyan-700 ">NavSankalp</Link>
    <a
  href="https://www.facebook.com/share/1CT2wb5Be1/"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-ghost hidden md:block py-1 text-2xl text-cyan-700"
>
  <img src="FacebookLogo.jpg" className="w-10 h-8 object-cover" alt="Facebook" />
</a> 
     <a
  href="https://www.instagram.com/nav__sankalp?igsh=cjh3amhxMHVjMnRj"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-ghost hidden md:block py-1 text-2xl text-cyan-700"
>
  <img src="/InstagramLogo.jpg" className="w-10 h-8 object-cover" alt="Instagram" />
</a>
    
  </div>
  <div className="navbar-center hidden lg:block">
    <ul className="menu menu-horizontal px-6 space-x-4 text-[16px] font-medium">
    <li><Link to="/Influencer/Homepage">Influencer</Link></li>

    <li> <Link to="/rojgar/home" className="hover:text-primary transition-all duration-200"> Rojgar </Link> </li>
    <li> <Link to="/Property/Homepage" className="hover:text-primary transition-all duration-200">Property</Link></li>
    <li> <Link to="/" className="hover:text-primary transition-all duration-200">Busniess</Link></li>
    </ul>
  </div>
      {/* Visible on small screens (mobile only) */} 
      <div className="navbar-end gap-1 items-center md:hidden">
        
      <button
      onClick={handleClick}
      className="btn btn-xs btn-outline btn-primary rounded-full hover:scale-105 transition duration-200"
    >
      Free Listing
    </button>
    {/* <a className="btn btn-xs btn-primary rounded-full hover:scale-105 transition duration-200">
    Login / Signup
  </a>
 */}

 
    <a
  className="btn btn-xs btn-primary rounded-full hover:scale-105 transition duration-200"
  href="https://www.instagram.com/nav__sankalp?igsh=cjh3amhxMHVjMnRj"
  target="_blank"
  rel="noopener noreferrer"
>
  Instagram
</a>
  
</div>

  {/* Visible on medium and larger screens */}
 <div className="navbar-end  gap-2 items-center  hidden md:flex">
 <button
      onClick={handleClick}
      className="btn btn-xs btn-outline btn-primary rounded-full hover:scale-105 transition duration-200"
    >
      Free Listing
    </button>
    <a className="btn btn-sm btn-primary rounded-full hover:scale-105 transition-all duration-200">
      Login / Signup
    </a>
  </div> 
</div>
</>
  )
}

export default Navbar
