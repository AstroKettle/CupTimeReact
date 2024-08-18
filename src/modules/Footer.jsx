import { Link } from "react-router-dom";

export const Footer = () => (
    <footer className="footer">
        <div className="container footer__container">
            <a className="footer__logo-link">
                <img src="image/logo.svg" alt="Логотип сайта" className="footer__logo" />
            </a>

            <div className="footer_nav">
                <ul className="footer__menu">
                    <li className="footer__menu-item">
                        <Link to="/products?category=tea" className="footer__menu-link">Чай</Link></li>
                    <li className="footer__menu-item">
                        <Link to="/products?category=coffee" className="footer__menu-link">Кофе</Link></li>
                    <li className="footer__menu-item">
                        <Link to="/products?category=teapots" className="footer__menu-link">Чайники</Link></li>
                    <li className="footer__menu-item">
                        <Link to="/products?category=cezves" className="footer__menu-link">Турки</Link></li>
                    <li className="footer__menu-item">
                        <Link to="/products?category=other" className="footer__menu-link">Прочее</Link></li>
                </ul>
            </div>

            <div className="footer__info">
                <p className="footer__copyright">©CUPTIME, 2024</p>
                <p className="footer__description">Проект сделан в учебных целях</p>
                <ul className="footer__developers">
                    <li className="footer__developers">
                        Разработчик: <a href="#" className="footer__developer-link">Eugeny Yusipov</a>
                    </li>
                    <li className="footer__developers">
                        Дизайнер: <a href="#" className="footer__developer-link">Anastasia Ilina</a>
                    </li>
                </ul>
            </div>

            <div className="footer__contacts">
                <a href="mailto:astrofizik51@yandex.ru" className="footer__email">AstroFizik51@yandex.ru</a>
                <ul className="footer__social">
                    <li className="footer__social-item">
                        <a href="https://t.me/AstroKettle" className="footer__social-link">
                            <img src="image/TG.svg" alt="Телега" className="socials__logo" />
                        </a></li>
                    <li className="footer__social-item">
                        <a href="" className="footer__social-link">
                            <img src="image/YT.svg" alt="Ютуб" className="socials__logo" />
                        </a></li>
                    <li className="footer__social-item">
                        <a href="https://vk.com/usipov" className="footer__social-link">
                            <img src="image/VK.svg" alt="ВК" className="socials__logo" />
                        </a></li>
                </ul>
            </div>
        </div>
    </footer>
)