import '../assets/styles/sidebar.css';
import logo from "../assets/images/logo.svg";
import first from "../assets/images/first.svg";
import second from "../assets/images/second.svg";
import third from "../assets/images/third.svg";
import forth from "../assets/images/forth.svg";
import fifth from "../assets/images/fifth.svg";
import six from "../assets/images/six.svg";


const Sidebar =  (props) => {
    return (
        <div className="sidebar">
            <a href={'/'} className="logo">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="logo-title">TO-DO</div>
            </a>

            <ul className="menu-group">
                <li className="menu-item">
                    <a href={'/'} className="menu-link">
                        <img src={first} className="" alt="logo" />
                    </a>
                </li>
                <li className="menu-item">
                    <a href={'/'} className="menu-link">
                        <img src={second} className="" alt="logo" />
                    </a>
                </li>
                <li className="menu-item">
                    <a href={'/'} className="menu-link">
                        <img src={third} className="" alt="logo" />
                    </a>
                </li>
                <li className="menu-item">
                    <a href={'/'} className="menu-link">
                        <img src={forth} className="" alt="logo" />
                    </a>
                </li>
                <li className="menu-item">
                    <a href={'/'} className="menu-link">
                        <img src={fifth} className="" alt="logo" />
                    </a>
                </li>
                <li className="menu-item">
                    <a href={'/'} className="menu-link">
                        <img src={six} className="" alt="logo" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;