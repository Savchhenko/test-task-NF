import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";
import cartIcon from "../assets/cart-icon.svg";
import likesIcon from "../assets/likes-icon.svg";
import "../index.css";

const Header = () => {
    const value = useContext(Context);

    return (
        <header className="header">
            <div className="logo"><Link to="/">QPICK</Link></div>
            <div className="header__icons">
                <a href="#" className="icon">
                    <span className="icon-notification">2</span>
                    <img src={likesIcon} alt="Избранное иконка" />
                </a>
                <Link to="/cart" className="icon">
                    <span className="icon-notification">{value.productsCounter}</span>
                    <img src={cartIcon} alt="Корзина иконка"/>
                </Link>
            </div>
        </header>
    );
};

export default Header;