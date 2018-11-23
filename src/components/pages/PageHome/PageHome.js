import React, { Component } from 'react';

import UsersContainer from './UsersContainer/UsersContainer';
import UserInfo from './UserInfo/UserInfo';

import styles from './PageHome.css';

class PageHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedUser: null
        };

        this.selectUser = this.selectUser.bind(this);
    }

    /* METHODS */

    selectUser(user) {
        this.setState({
            selectedUser: user || null
        });
    }

    render() {
        return (
            <div className={styles.pageHome}>
                <div className={styles.usersContainer}>
                    <UsersContainer selectUser={this.selectUser} />
                </div>
                <div className={styles.userInfo}>
                    <UserInfo user={this.state.selectedUser} />
                </div>
            </div>
        );
    }
}

export default PageHome;