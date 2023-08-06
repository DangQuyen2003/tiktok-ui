import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview/>
                </PopperWrapper>
            </div>
        );
    };

    return (
        <Tippy  interactive delay={[1000, 500]} offset={[-20,0]} placement="bottom" render={ renderPreview}>
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJznMaDtgrRc1hXSb577HXXDxYbF8tpaZgKw&usqp=CAU"
                    alt=""
                />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>dangxuanquyen</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>Đăng Xuân Quyền</p>
                </div>
            </div>
        </Tippy>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
