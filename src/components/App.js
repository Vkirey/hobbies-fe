import React, { Component } from 'react';
import { connect } from 'react-redux';
import { aApp } from '../actions';
import Table from './Table';

class App extends Component {
    componentDidMount() {
        const { fetchUsersData, fetchHobbiesData } = this.props;
        fetchUsersData && fetchUsersData();
        fetchHobbiesData && fetchHobbiesData();
    }

    render() {
        return <Table />
    }
}

const mapActionsToProps = (dispatch) => ({
    fetchUsersData: () => dispatch(aApp.fetchUsersData()),
    fetchHobbiesData: () => dispatch(aApp.fetchHobbiesData())
})

export default connect(null, mapActionsToProps)(App);