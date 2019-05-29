
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddHobbyControl from '../AddHobbyControl';
import RemoveHobbyModal from '../RemoveHobbyModal';
import { aApp } from '../../actions';
import './HobbiesView.scss';

class HobbiesView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: null,
            showModal: false,
            hobbyToRemove: null
        }

        this.renderHobbies = this.renderHobbies.bind(this);
        this.onRemoveHobby = this.onRemoveHobby.bind(this);
        this.removeHobbyAccepted = this.removeHobbyAccepted.bind(this);
    }

    onRemoveHobby(hobby) {
        this.setState({ hobbyToRemove: hobby, showModal: true })
    }

    removeHobbyAccepted() {
        const { selectedUser, removeHobby } = this.props;
        const { hobbyToRemove } = this.state;
        removeHobby && removeHobby(selectedUser, hobbyToRemove);
        this.setState({ hobbyToRemove: null, showModal: false });
    }

    renderHobbies() {
        const { hobbies } = this.props;
        if(hobbies.length) {
            return hobbies.map((hobby, index) => 
            (<div 
                className="hobby-row"
                key={index} >
                <div className="hobby-passion-column">
                    Passion: {hobby.passionLevel}
                </div>
                <div className="hobby-name-column">
                    {hobby.name}
                </div>
                <div className="hobby-year-column">
                    Since {hobby.year}
                </div>
                <div className="delete-hobby-column">
                    <button className="delete-button" onClick={() => this.onRemoveHobby(hobby)}>remove</button>
                </div>
            </div>))
        }
        else { return '' }
    }

    render() {
        const { showModal } = this.state;
        return <div className="hobbies-view">
            {showModal && <RemoveHobbyModal onYes={this.removeHobbyAccepted} onNo={() => this.setState({ showModal: false })}/>}
            <AddHobbyControl />
            <div className="hobbies-list">
                {this.renderHobbies()}
            </div>
        </div>
    }
}

const mapStateToProps = ({ rApp: { selectedUser, selectedHobbies } }) => ({ selectedUser, hobbies: selectedHobbies });

const mapActionsToProps = (dispatch) => ({
    removeHobby: (user, hobby) => dispatch(aApp.removeHobby(user, hobby)),
    showRemoveHobbyModal: (yesCallback) => dispatch(aApp.showRemoveHobbyModal(yesCallback)),
})

export default connect(mapStateToProps, mapActionsToProps)(HobbiesView);