
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { aApp } from '../../actions';
import './AddHobbyControl.scss';

class AddUserControl extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            passionLevel: '',
            year: ''
        }

        this.onAddHobby = this.onAddHobby.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onYearChange = this.onYearChange.bind(this);
        this.onPassionLevelChange = this.onPassionLevelChange.bind(this);
    }

    onNameChange(e) {
        this.setState({ name: e.target.value })
    }

    onYearChange(e) {
        this.setState({ year: e.target.value })
    }

    onPassionLevelChange(e) {
        this.setState({ passionLevel: e.target.value })
    }

    onAddHobby() {
        const { passionLevel, name, year } = this.state;  
        const { addHobby, selectedUser } = this.props;
        addHobby && addHobby(selectedUser, { passionLevel, name, year });
        this.setState({ passionLevel: '', name: '', year: '' })
    }

    render() {
        const { name, passionLevel, year } = this.state;  
        const { selectedUser } = this.props;
        return <div className="add-hobby-control-wrapper">
            <input disabled={!selectedUser} onChange={this.onPassionLevelChange} className="add-hobby-name-input" placeholder="Passion Level..." value={passionLevel} />
            <input disabled={!selectedUser} onChange={this.onNameChange} className="add-hobby-name-input" placeholder="Name..." value={name} />
            <input disabled={!selectedUser} onChange={this.onYearChange} className="add-hobby-name-input" placeholder="Year..." value={year} />
            <button disabled={!selectedUser} onClick={this.onAddHobby} className="add-hobby-name-submit">Add</button>
        </div>
    }
}

const mapStateToProps = ({ rApp: { selectedUser } }) => ({ selectedUser });

const mapActionsToProps = (dispatch) => ({
    addHobby: (user, hobby) => dispatch(aApp.addHobby(user, hobby))
})

export default connect(mapStateToProps, mapActionsToProps)(AddUserControl);