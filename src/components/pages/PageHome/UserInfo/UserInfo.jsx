import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import InfoItem from './InfoItem/InfoItem';

import { sanitizeString } from 'utils/utilsString';
import { composeFullName, composeAddress } from 'utils/utilsUser';

import styles from './UserInfo.module.css';

const UserInfo = ({ user }) => {
    const fullName = composeFullName(user);

    const items = user
        ?
        [
            { label: 'Name', text: fullName, style: { textTransform: 'capitalize' }, additionalClasses: [styles.itemName] },
            { label: 'Email Address', text: sanitizeString(user.email) },
            { label: 'Phone Number', text: sanitizeString(user.cell) },
            { label: 'Address', text: composeAddress(user), style: { textTransform: 'capitalize' } },
        ]
        :
        [];

    const largePictureUrl = user?.picture?.large || '';

    return (
        <div className={classNames(styles.userInfo, { [styles.hidden]: !user })}>
            <div className={styles.scrollable}>
                {user
                &&
                <Fragment>
                    <div className={styles.portraitContainer}>
                        <div className={styles.portraitBackground}
                             style={{
                                ...(largePictureUrl && { backgroundImage: `url(${largePictureUrl})` }),
                             }}
                        />
                        {largePictureUrl
                        &&
                        <img
                            src={largePictureUrl}
                            title={fullName}
                            alt={fullName}
                            className={styles.portrait}
                        />}
                        <span className={styles.name}>{fullName}</span>
                        <span className={styles.additionalInfo}>{user.cell}</span>
                    </div>
                    <div className={styles.itemsContainer}>
                        {items.map((element, index) =>
                            <InfoItem
                                key={element.label}
                                label={element.label}
                                text={element.text}
                                style={element.style}
                                additionalClasses={element.additionalClasses}
                            />
                        )}
                    </div>
                </Fragment>}
            </div>
        </div>
    );
};

export default UserInfo;

UserInfo.propTypes = {
    user: PropTypes.object
};
