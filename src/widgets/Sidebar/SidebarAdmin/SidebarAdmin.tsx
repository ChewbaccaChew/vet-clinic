import { AppLink } from '../../../shared';
import styles from './SidebarAdmin.module.scss'

const SidebarAdmin = () => {
    const {
        wrapper,
        title,
        first_list,
        second_list,
        link,
        icon_home,
        icon_profile,
        icon_msg,
        icon_history,
        icon_tasks,
        icon_comments,
        icon_settings,
        icon_support,
        icon_privacy} = styles;

    return (
    <div className={wrapper}>
        <div className={title}>Dashboard</div>
        <div className={first_list}>
            <ul>
                <li>
                    <AppLink to='/admin/home' role='button' className={`${link} ${icon_home}`}>Home</AppLink>
                </li>
                <li>
                    <AppLink to='/admin/users' role='button' className={`${link} ${icon_profile}`}>Users</AppLink>
                </li>
                <li>
                    <AppLink to='/admin/notification' role='button' className={`${link} ${icon_msg}`}>Notification</AppLink>
                </li>
                <li>
                    <AppLink to='/admin/history' role='button' className={`${link} ${icon_history}`}>History</AppLink>
                </li>
                <li>
                    <AppLink to='/admin/topic' role='button' className={`${link} ${icon_tasks}`}>Topic</AppLink>
                </li>
                <li>
                    <AppLink to='/admin/comments' role='button' className={`${link} ${icon_comments}`}>Comments</AppLink>
                </li>
            </ul>
        </div>
        <div className={second_list}>
            <ul>
                <li>
                    <AppLink to='admin/settings' role='button' className={`${link} ${icon_settings}`}>Setting</AppLink>
                </li>
                <li>
                    <AppLink to='admin/support' role='button' className={`${link} ${icon_support}`}>Support</AppLink>
                </li>
                <li>
                    <AppLink to='admin/privacy' role='button' className={`${link} ${icon_privacy}`}>Privacy</AppLink>
                </li>
            </ul>
        </div>
    </div>)
}

export default SidebarAdmin