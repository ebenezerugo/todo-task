import '../assets/styles/notification.css';
import notificationIcon from "../assets/images/notification-icon.svg";
import { useSelector } from 'react-redux';


const Notification = () => {
    const tasks = useSelector((state) => state.tasks);
    return (
        <div className="notification">
            <span><img src={notificationIcon} alt="Notification"/></span>
            <span className="badge">{tasks.length}</span>
        </div>
    )
}

export default Notification;