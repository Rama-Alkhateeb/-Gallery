export default function NavBar(){
    return (<nav className="navbar">
        <div className="navbar-left">
          <a  href="/" className="logo">
          <i className="fa-solid fa-palette"></i>
          </a>
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
            <li>
              <a href="/">Main</a>
            </li>
            <li>
              <a href="/fashion">Fashion</a>
            </li>
            <li>
              <a href="/nature">Nature</a>
            </li>
            <li>
              <a href="/animals">Animals</a>
            </li>
            <li>
              <a href="/foods">Foods</a>
            </li>
          </ul>
        </div>
      </nav>
      );
}