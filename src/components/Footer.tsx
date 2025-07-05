import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export function Footer() {
    return (
        <footer id="footer">
            <div className="container-fluid">
                <a href="https://github.com/Maximetra" target="_blank">
                    <FontAwesomeIcon size="5x" icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/maxime-mbiya-kiaku-24b79717a/" target="_blank">
                    <FontAwesomeIcon size="5x" icon={faLinkedin} />
                </a>
            </div>
        </footer>
    )
}

export default Footer;