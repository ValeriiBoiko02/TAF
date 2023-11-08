import './style.css'
import instagram from "../../img/icons/instagram.svg";
import linkedIn from "../../img/icons/linkedIn.svg";
import gitHub from "../../img/icons/gitHub.svg";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a target="_blank" href="https://www.instagram.com/boiko.v_/">
                            <img src={instagram} alt="Link"/></a></li>

                        <li className="social__item"><a target="_blank" href="https://www.linkedin.com/in/valerii-boiko-67535a226/">
                            <img src={linkedIn} alt="Link"/></a></li>

                        <li className="social__item"><a target="_blank" href="https://github.com/ValeriiBoiko02">
                            <img src={gitHub} alt="Link"/></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer