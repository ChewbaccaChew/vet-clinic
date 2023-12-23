import SidebarAdmin from '../../widgets/Sidebar/SidebarAdmin/SidebarAdmin';
import styles from './AdminPageLayout.module.scss'

const AdminPageLayout = () => {
    const {wrapper, admin_sidebar, container, searchpanel, main} = styles;
    return <div className={wrapper}>
        <div className={admin_sidebar}>
            <SidebarAdmin />
        </div>
        <div className={container}>
            <div className={searchpanel}>SEARCH PANEL</div>
            <div className={main}>MAIN</div>
        </div>
    </div>
}

export default AdminPageLayout