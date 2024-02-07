import { Link, useLocation } from 'react-router-dom';

function ResponsiveAppBar() {
  const hoverColor = '#FFFFFF';
  const textColor = '#D24FB3ff';
  const currentPage = useLocation().pathname;

  return (
    <header
      className="fixed w-full top-0 z-10"
      style={{
        backgroundColor: '#151D52ff',
        height: '100px',
        color: 'white',
        paddingTop: '10px'
      }}
    >
      <div className="container mx-auto md:flex md:items-center md:justify-between sm:flex sm:items-center sm:justify-between">
        <div className="md:w-full sm:w-full text-center">
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 sm:mr-auto sm:ml-4 sm:py-1 sm:pl-4 flex flex-wrap items-center justify-center text-base"
            style={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              backgroundColor: '#151D52ff',
              color: location.pathname === '/' ? hoverColor : textColor,
              textDecoration: 'none',
              fontSize: '2rem',
              marginTop: '20px',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Link for Home */}
            <Link
              to="/"
              className="hidden lg:block mr-5 "
              style={{ color: 'white', textDecoration: 'none' }}
            >
              CHRISTI TUGWELL
            </Link>
            {/* Home Link for smaller screens */}
            <Link
              to="/"
              className="mr-5 sm:block md:block lg:hidden text-lg"
              style={{
                color: currentPage === '/' ? hoverColor : textColor,
                textDecoration: 'none',
              }}
            >
              Home
            </Link>

            {/* Menu Bar Items */}
            <Link
              to="/about"
              className="mr-5 text-lg"
              style={{
                color: currentPage === '/about' ? hoverColor : textColor,
                textDecoration: 'none',
              }}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="mr-5 text-lg"
              style={{
                color: currentPage === '/projects' ? hoverColor : textColor,
                textDecoration: 'none',
              }}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="mr-5 hover:text-white text-lg"
              style={{
                color: currentPage === '/contact' ? hoverColor : textColor,
                textDecoration: 'none',
              }}
            >
              Contact
            </Link>
            <Link
              to="/resume"
              className="mr-5 hover:text-white text-lg"
              style={{
                color: currentPage === '/resume' ? hoverColor : textColor,
                textDecoration: 'none',
              }}
            >
              Resume
            </Link>
          </nav>
        </div>
      </div>
    </header >
  );
}
export default ResponsiveAppBar;












