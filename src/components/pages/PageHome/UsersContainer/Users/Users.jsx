import React from 'react';
import PropTypes from 'prop-types';

import User from './User/User';

import styles from './Users.module.css';

const Users = ({
    selectableUsers,
    toggleUserSelected
}) => (
    <div className={styles.users}>
        {selectableUsers.map(element =>
            <User
                key={element.data.login.uuid}
                selectableUser={element}
                toggleUserSelected={toggleUserSelected}
            />
        )}
    </div>
);

export default Users;

Users.propTypes = {
    selectableUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleUserSelected: PropTypes.func.isRequired
};
