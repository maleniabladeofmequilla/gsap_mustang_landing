import {footerLinks} from "../constants/index.jsx";

const Footer = () => {
    return (
        <footer>
            <div className="info">
                <p>For more information head to official Ford website - https://www.ford.com.</p>
                <img src="/logo.png" alt ="logo" className="h-30"/>
            </div>

            <hr />

            <div className="links">
                <p>Copyright © 2025 . Ford Motors Company . All rights reserved.</p>

                <ul>
                    {footerLinks.map(({label, link }) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer