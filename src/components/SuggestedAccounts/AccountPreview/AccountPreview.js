import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJznMaDtgrRc1hXSb577HXXDxYbF8tpaZgKw&usqp=CAU"
                    alt=""
                />
                <Button className={cx("follow-btn")} primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>dangxuanquyen</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Đăng Xuân Quyền</p>
                <p className={cx("analytics")}>
                    <strong className={cx("value")}>99.9M </strong>
                    <span className={cx("label")}>Followers</span>
                    <strong className={cx("value")}>99.9M </strong>
                    <span className={cx("label")}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
