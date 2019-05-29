
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddUserControl from '../AddUserControl';
import { aApp } from '../../actions';
import './UsersView.scss';

class UsersView extends Component {
    constructor(props) {
        super(props);

        this.renderUsers = this.renderUsers.bind(this);
        this.selectUser = this.selectUser.bind(this);
    }

    selectUser(user) {
        const { selectUser, selectedUser } = this.props;
        selectUser && selectUser(user);
    }

    renderUsers() {
        const { users, selectedUser } = this.props;
        if(users.length) {
            return users.map((user, index) => 
            (<div 
                className={`user-row${selectedUser && selectedUser.name === user.name ? ' selected' : ''}`}
                key={index} 
                onClick={() => this.selectUser(user)}>
                {user.name}
            </div>))
        }
        else { return '' }
    }

    render() {
        return <div className="users-view">
            <AddUserControl />
            <div className="users-list">
                {this.renderUsers()}
            </div>
        </div>
    }
}

const mapStateToProps = ({ rApp: { users, selectedUser } }) => ({ users, selectedUser });
const mapActionsToProps = (dispatch) => ({
    selectUser: (user) => dispatch(aApp.selectUser(user))
})

export default connect(mapStateToProps, mapActionsToProps)(UsersView);