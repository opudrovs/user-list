import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import Loader from 'components/common/Loader';

import Header from './Header';
import SearchBar from './SearchBar';
import Users from './Users';

import { USERS_API_URL } from 'constants/constants';

import { composeFullName } from 'utils/utilsUser';

import styles from './UsersContainer.module.css';

class UsersContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectableUsers: [],
            userName: ''
        };

        this.getUsersData = this.getUsersData.bind(this);
        this.toggleUserSelected = this.toggleUserSelected.bind(this);
        this.setUserName = this.setUserName.bind(this);
        this.getFilteredUsers = this.getFilteredUsers.bind(this);
    }

    componentDidMount() {
        this.getUsersData();
    }

    getUsersData() {
        axios.get(USERS_API_URL)
            .then(response => {
                const users = response.data.results.map((element, index) => ({
                    isSelected: false,
                        index: index,
                        data: element
                }));

                this.setState({
                    selectableUsers: users
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    toggleUserSelected(userIndex) {
        const users = this.state.selectableUsers
            .map((element, index) => (
                { ...element, isSelected: index === userIndex ? !element.isSelected : false }
            ));

        this.setState({
            selectableUsers: users
        });

        const selectedUser = users[userIndex];
        this.props.selectUser(selectedUser.isSelected ? selectedUser.data : null);
    }

    setUserName(userName) {
        this.setState({
            userName: userName
        });
    }

    getFilteredUsers(userName) {
        if (!userName) {
            return this.state.selectableUsers;
        }

        return this.state.selectableUsers
            .filter(element => {
                return composeFullName(element.data)
                    .toLowerCase()
                    .indexOf(userName) !== -1;
            });
    }

    render() {
        return (
            <div className={styles.usersContainer}>
                <div>
                    <Header />
                </div>
                <div className={styles.searchBar}>
                    <SearchBar
                        setUserName={this.setUserName}
                    />
                </div>
                <div>
                    {this.state.selectableUsers.length > 0
                        ?
                         <Users
                            selectableUsers={this.getFilteredUsers(this.state.userName)}
                            toggleUserSelected={this.toggleUserSelected}
                        />
                        :
                        <div className={styles.loaderContainer}>
                            <div className={styles.loader}>
                                <Loader />
                            </div>
                        </div>}
                </div>
            </div>
        );
    }
}

export default UsersContainer;

UsersContainer.propTypes = {
    selectUser: PropTypes.func.isRequired
};
