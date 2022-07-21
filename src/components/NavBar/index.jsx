import "./style.scss";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="nav-bar-container container-fluid">
      <div className="nav-bar-items">
        <div className="nav-bar-links">
          <h1>
            The<span className="nav-brand">Shop</span>
          </h1>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>Product</li>
            <li>Blog</li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="nav-bar-search">
          <BsSearch />
          <input type="text" className="input-field" />
        </div>
      </div>
      <div className="nav-bar-icons">
        <RiAccountCircleFill />
        <BsCart2 />
        <AiOutlineHeart />
      </div>
    </div>
  );
};

export { NavBar };
