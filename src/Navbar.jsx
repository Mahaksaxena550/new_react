import logo from "./assets/M_logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (


 <nav className="navbar">
  <img src={logo} alt="logo" className="logo" />

  <div className="nav-center">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Contact</a>
  </div>

  <a href="#" className="register-btn">Registration</a>
</nav>

  );
};

export default Navbar;
