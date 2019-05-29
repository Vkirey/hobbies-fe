import API from '../API';
import types from '../constants/ActionTypes';

const aApp = {
    fetchUsersData: (roomID) => {
        return function(dispatch) {
            dispatch({ type: types.GET_USERS_DATA_FETCH });
            API.getUsers().then(data => {
                dispatch({ type: types.GET_USERS_DATA_SUCCESS, payload: data });
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: types.GET_USERS_DATA_ERROR });
            })
        }
    },
    fetchHobbiesData: (roomID) => {
        return function(dispatch) {
            dispatch({ type: types.GET_HOBBIES_DATA_FETCH });
            API.getHobbies().then(data => {
                dispatch({ type: types.GET_HOBBIES_DATA_SUCCESS, payload: data });
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: types.GET_HOBBIES_DATA_ERROR });
            })
        }
    },
    addUser: (user) => {
        return function(dispatch) {
            dispatch({ type: types.ADD_USER_FETCH });
            API.addUser(user).then(data => {
                dispatch({ type: types.ADD_USER_SUCCESS, payload: data.user });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: types.ADD_USER_ERROR });
            });
        }
    },
    selectUser: (userName) => { 
        return function(dispatch) {
            dispatch({ type: types.SELECT_USER, payload: userName });
        }
    },
    addHobby: (user, hobby) => {
        return function(dispatch) {
            dispatch({ type: types.ADD_HOBBY_FETCH });
            API.addHobby(user, hobby).then(data => {
                dispatch({ type: types.ADD_HOBBY_SUCCESS, payload: data });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: types.ADD_HOBBY_ERROR });
            });
        }
    },
    removeHobby: (user, hobby) => {
        return function(dispatch) {
            dispatch({ type: types.DELETE_HOBBY_FETCH });
            API.removeHobby(user, hobby).then(data => {
                console.log('data', data)
                dispatch({ type: types.DELETE_HOBBY_SUCCESS, payload: data });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: types.DELETE_HOBBY_ERROR });
            });
        }
    }
}

export default aApp;