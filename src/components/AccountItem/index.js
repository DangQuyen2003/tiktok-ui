import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-1/357526703_1329701170975065_2630868005949823153_n.jpg?stp=dst-jpg_s320x320&_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sVl-7CUTwfsAX_TNvtc&_nc_ht=scontent.fdad1-4.fna&oh=00_AfAvHOzh7qXXq1G5WdNcSLRXUJgLDwnwMeZ5MZnylAjsnw&oe=64AF243A"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Dang Xuan Quyen</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>dangxuanquyen</span>
            </div>
        </div>
    );
}

export default AccountItem;
