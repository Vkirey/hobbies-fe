
import React, { Component } from 'react';
import TableHeader from '../TableHeader';
import UsersView from '../UsersView';
import HobbiesView from '../HobbiesView';
import './Table.scss';

class Table extends Component {
    render() {
        return <div className="table-wrapper">
            <TableHeader>User Hobbies</TableHeader>
            <div className="table-column-half left">
                <UsersView />
            </div>
            <div className="table-column-half">
                <HobbiesView />
            </div>
        </div>
    }
}

export default Table;