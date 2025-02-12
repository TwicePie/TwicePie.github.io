import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="navbar bg-base-100 max-w-4xl mx-auto rounded-box shadow-lg bg-opacity-90 backdrop-blur-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <div role="tablist" className="tabs tabs-bordered">
                <Link role="tab" className={`tab ${location.pathname === '/' ? 'tab-active' : ''}`} to="/">Home</Link>
                <Link role="tab" className={`tab ${location.pathname === '/projects' ? 'tab-active' : ''}`} to="/projects">Projects</Link>
                <Link role="tab" className={`tab ${location.pathname === '/about' ? 'tab-active' : ''}`} to="/about">About</Link>
              </div>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">Ocharu</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div role="tablist" className="tabs tabs-bordered">
            <Link role="tab" className={`tab ${location.pathname === '/' ? 'tab-active' : ''}`} to="/">Home</Link>
            <Link role="tab" className={`tab ${location.pathname === '/projects' ? 'tab-active' : ''}`} to="/projects">Projects</Link>
            <Link role="tab" className={`tab ${location.pathname === '/about' ? 'tab-active' : ''}`} to="/about">About</Link>
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
