import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    CompassIcon,
    CompassActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icon';
import config from '~/config';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="Dành cho bạn"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Đang Follow"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="Khám phá"
                    to={config.routes.explore}
                    icon={<CompassIcon />}
                    activeIcon={<CompassActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
        
            
            <SuggestedAccounts label='Tài khoản được đề xuất' />
            <SuggestedAccounts label='Các tài khoản đang follow' />
        </aside>
    );
}

export default Sidebar;
