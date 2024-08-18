import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export const Header = () => {
    const location = useLocation();
    const { cart } = useCart();
    const getActiveClass = (category) => {
        const currentCategory = new URLSearchParams(location.search).get('category');
        return currentCategory === category ? "active" : "";
    }

    const [isMenuOpen, setIsOpenMenu] = useState(false);
    const closeMenu = () => {
        setIsOpenMenu(false);
    }
    const openMenu = () => {
        setIsOpenMenu(true);
    }
    return (
        <header className="header">
            <div className="container header__container">
                <Link to="/" className="header__logo-link">
                    <img src="image/logo.svg" alt="Логотип сайта" className="header__logo" />
                </Link>

                <nav className={`header__nav ${isMenuOpen ? "active" : ""}`}>
                    <ul className="header__menu">
                        <li className="header__menu-item">
                            <Link onClick={closeMenu} to="/products?category=tea" className={`header__menu-link ${getActiveClass("tea")}`}>Чай</Link>
                        </li>
                        <li className="header__menu-item">
                            <Link onClick={closeMenu} to="/products?category=coffee" className={`header__menu-link ${getActiveClass("coffee")}`}>Кофе</Link>
                        </li>
                        <li className="header__menu-item">
                            <Link onClick={closeMenu} to="/products?category=teapots" className={`header__menu-link ${getActiveClass("teapots")}`}>Чайники</Link>
                        </li>
                        <li className="header__menu-item">
                            <Link onClick={closeMenu} to="/products?category=cezves" className={`header__menu-link ${getActiveClass("cezves")}`}>Турки</Link>
                        </li>
                        <li className="header__menu-item">
                            <Link onClick={closeMenu} to="/products?category=other" className={`header__menu-link ${getActiveClass("other")}`}>Прочее</Link>
                        </li>
                    </ul>

                    <button className="header__close-btn" onClick={closeMenu}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="7.28174" y="7.07532" width="20" height="1" transform="rotate(45 7.28174 7.07532)" fill="#D9D9D9" />
                            <rect x="6.5752" y="21.2173" width="20" height="1" transform="rotate(-45 6.5752 21.2173)" fill="#D9D9D9" />
                        </svg>

                    </button>
                </nav>
                <div className="header__control">
                    <Link to="cart" className="header__cart-link">
                        {cart ? cart.length : 0}
                    </Link>
                    <button className="header__burger" aria-label="Открыть меню" onClick={openMenu}>
                        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="4" y="9.5" width="20" height="1" fill="#D9D9D9" />
                            <rect x="4" y="14.5" width="20" height="1" fill="#D9D9D9" />
                            <rect x="4" y="19.5" width="20" height="1" fill="#D9D9D9" />
                        </svg>

                    </button>
                </div>
            </div>
        </header>
    );
}