import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import { composeFullName } from 'utils/utilsUser';

import styles from './User.module.css';

const User = ({
    selectableUser,
    toggleUserSelected
}) => {
    const user = selectableUser.data;
    const fullName = composeFullName(user);
    const mediumPictureUrl = user?.picture?.medium || '';

    return (
        <div className={styles.spacing}>
            <div
                className={classNames(styles.user, { [styles.selected]: selectableUser.isSelected })}
                onClick={() => toggleUserSelected(selectableUser.index)}
            >
                {mediumPictureUrl
                &&
                <img
                    src={mediumPictureUrl}
                    title={fullName}
                    alt={fullName}
                    className={styles.portrait}
                />}

                <div className={styles.name}>{fullName}</div>
            </div>
        </div>
    );
};

export default User;

User.propTypes = {
    selectableUser: PropTypes.object.isRequired,
    toggleUserSelected: PropTypes.func.isRequired
};
