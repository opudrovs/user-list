import React, { Component } from 'react';

import UsersContainer from './UsersContainer';
import UserInfo from './UserInfo';

import styles from './PageHome.module.css';

class PageHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedUser: null
        };

        this.selectUser = this.selectUser.bind(this);
    }

    selectUser(user) {
        this.setState({
            selectedUser: user
        });
    }

    render() {
        return (
            <div>
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
