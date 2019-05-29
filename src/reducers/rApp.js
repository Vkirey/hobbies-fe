import types from '../constants/ActionTypes';

const initialState = {
    users: [],
    hobbies: [],
    selectedUser: null,
    selectedHobbies: [],
    usersLoading: false,
    hobbiesLoading: false
};


const rApp = (state = initialState, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case types.GET_USERS_DATA_FETCH:
            return {
                ...state,
                usersLoading: true
            }
        case types.GET_USERS_DATA_SUCCESS:
            return {
                ...state,
                users: payload,
                usersLoading: false
            }
        case types.GET_HOBBIES_DATA_FETCH:
            return {
                ...state,
                hobbiesLoading: true
            }
        case types.GET_HOBBIES_DATA_SUCCESS:
            return {
                ...state,
                hobbies: payload,
                hobbiesLoading: false
            }
        case types.ADD_USER_SUCCESS:
            return {
                ...state,
                users: [ ...state.users, payload]
            }
        case types.SELECT_USER: {
            const mappedHobbies = state.hobbies.filter(hobby => payload.hobbies.find(h => h === hobby._id))
            return {
                ...state,
                selectedUser: payload,
                selectedHobbies: mappedHobbies
            }
        }
        case types.ADD_HOBBY_SUCCESS:
            return {
                ...state,
                hobbies: [...state.hobbies, payload],
                users: state.users.map(user => {
                    if(user._id === state.selectedUser._id) {
                        return { ...user, hobbies: [...user.hobbies, payload._id] }
                    }
                    else {
                        return user;
                    }
                }),
                selectedHobbies: [ ...state.selectedHobbies, payload]
        }
        case types.DELETE_HOBBY_SUCCESS:
            return {
                ...state,
                hobbies: state.hobbies.filter(hb => hb._id !== payload._id),
                users: state.users.map(user => {
                    if(user._id === state.selectedUser._id) {
                        return { ...user, hobbies: user.hobbies.filter(hb => hb._id !== payload._id) }
                    }
                    else {
                        return user;
                    }
                }),
                selectedHobbies: state.selectedHobbies.filter(hb => hb._id !== payload._id)
            }
        default:
            return state;
    }
};

export default rApp;