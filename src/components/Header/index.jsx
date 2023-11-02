import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

function Header () {
    const navBarItemsClasses = "font-bold text-sm uppercase hover:cursor-pointer hover:text-white"

    return (
          <nav 
            className="bg-primary-300 w-screen h-16 
            flex items-center justify-start 
            shadow-sm shadow-primary-300"
          >
            <div className="flex flex-row items-center justify-start gap-4 ml-24">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
                <Link to="/projects">
                    <p className={navBarItemsClasses}>Projects</p>
                </Link>
                <p className={navBarItemsClasses}>Contact Me</p>
                <a href="https://github.com/danillo-expedito/danillo-expedito.github.io" target="_blank" rel="noreferrer">
                  <p className={navBarItemsClasses}>View Source Code</p>  
                </a>
            </div>
          </nav>
    )
}

export default Header;