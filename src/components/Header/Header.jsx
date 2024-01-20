import "./Header.scss";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-content">
        <ul className="left">
          <li>
            <Link className="nav-text" to={`/`}>Home</Link>
          </li>
          <li>
            {" "}
            <Link className="nav-text" to={`/about`}>About</Link>
          </li>
          <li>
            {" "}
            <Link className="nav-text" to={`/category`}>Categories</Link>
          </li>
        </ul>
        <div className="center">JSDEVSTORE</div>
        <div className="right">
          <IoSearchOutline />
          <CiHeart />
          <span className="cart-icon">
            <BsCart3 />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
