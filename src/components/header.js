import '../assets/styles/header.css';
import Notification from "./notification";

import profileImage from "../assets/images/profile-image.svg"
import Search from "./search";

const Header = (props) => {
    return (
        <header className="header">
            <div className="place-center">
                <Search/>
            </div>
            <div className="place-end">
                <span className="notification-container">
                    <Notification/>
                </span>
                <span>
                    <img src={profileImage} className="" alt="logo"/>
                </span>
            </div>
        </header>
    )
}

export default Header;