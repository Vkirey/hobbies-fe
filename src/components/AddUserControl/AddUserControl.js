
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { aApp } from '../../actions';
import './AddUserControl.scss';

class AddUserControl extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        }

        this.onAddUser = this.onAddUser.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
    }

    onNameChange(e) {
        this.setState({ name: e.target.value })
    }

    onAddUser() {
        const { name } = this.state;
        const { addUser } = this.props;
        addUser && addUser({ name })
        this.setState({ name: '' })
    }

    render() {
        const { name } = this.state;
        return <div className="add-user-control-wrapper">
            <input onChange={this.onNameChange} className="add-user-name-input" placeholder="Name..." value={name} />
            <button onClick={this.onAddUser} className="add-user-name-submit">Add</button>
        </div>
    }
}

const mapActionsToProps = (dispatch) => ({
    addUser: (user) => dispatch(aApp.addUser(user))
})

export default connect(null, mapActionsToProps)(AddUserControl);