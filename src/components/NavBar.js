import '../App.css';
import logo from '../images/logo.png';

function NavBar() {
  return (
      <header>
        <nav>
          <img src={logo} className="logo" alt="logo" />
        </nav>
      </header>
  );
}

export default NavBar;
