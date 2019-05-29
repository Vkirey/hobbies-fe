
import React, { Component } from 'react';
import './RemoveHobbyModal.scss';

class RemoveHobbyModal extends Component {
    render() {
        return <div className="remove-hobby-modal">
            <div className="remove-hobby-modal-body">
                <div className="remove-hobby-modal-text">Are you sure you want to delete this hobby?</div>
                <div className="remove-hobby-modal-controlelrs">
                    <button onClick={this.props.onYes}>YES</button>
                    <button onClick={this.props.onNo}>NO</button>
                </div>
            </div>
        </div>
    }
}

export default RemoveHobbyModal;