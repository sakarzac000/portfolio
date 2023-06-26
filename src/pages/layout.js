import { Outlet, Link } from "react-router-dom";
import '../styles/layout.css'

const Layout = () => {
  return (
    <>
      <div className="nav-wrapper">

        <div className="navlink">
          <Link to="/" className="navtext">
              Home  
          </Link>  
        </div>

        <div className="navlink">
          <Link to="/blogs" className="navtext">
            Blog
          </Link>
        </div>

        <div className="navlink">
          <Link to="/contact" className="navtext">
            Contact  
          </Link>
        </div>

      </div>

      <Outlet />
    </>
  )
};

{/* <Link to="/">Home</Link> */}

export default Layout;