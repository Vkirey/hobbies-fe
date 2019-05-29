import axios from 'axios';
import config from './config';

const API = {};

API.getHobbies = (roomID) => new Promise((res, rej) => {
    //res({ error: null, startDate: new Date(new Date().getTime() + 5000) })
    axios.get(config.API_URL + '/hobbies')
    .then(function (response) {
        res(response.data)
      })
      .catch(function (error) {
        rej(error)
      });
})

API.getUsers = (roomID) => new Promise((res, rej) => {
    axios.get(config.API_URL + '/users')
    .then(function (response) {
      console.log('response', response)
        res(response.data)
      })
      .catch(function (error) {
        console.log('error', error)
        rej(error)
      });
})

API.addUser = (user) =>new Promise((res, rej) => {
  //res({ error: null, startDate: new Date(new Date().getTime() + 5000) })
  axios.post(config.API_URL + '/users', {
      "name": user.name,
      "hobbies": []
  })
  .then(function (response) {
      res(response.data)
    })
    .catch(function (error) {
      rej(error)
    });
});

API.addHobby = (user, hobby) => new Promise((res, rej) => {
  axios.post(config.API_URL + '/hobbies', {
      passionLevel: hobby.passionLevel,
      name: hobby.name,
      year: hobby.year
  }).then(responseH => {
    if(responseH.data) {
      axios.put(config.API_URL + '/users/' + user._id, {
        "hobbies": [...user.hobbies, responseH.data._id ]
      }).then(responseU => {
        res(responseH.data);
      }).catch(function (error) {
        rej(error)
      });
    }
    else {
      rej('Failed to create new hobby');
    }
  })
  .catch(function (error) {
    rej(error)
  })
});

API.removeHobby = (user, hobby) => new Promise((res, rej) => {
  axios.delete(config.API_URL + '/hobbies/' + hobby._id)
  .then(responseH => {
    if(responseH.data) {
      axios.put(config.API_URL + '/users/' + user._id, {
        "hobbies": user.hobbies.filter(hb => hb._id !== responseH.data._id)
      }).then(responseU => {
        res(responseH.data);
      }).catch(function (error) {
        rej(error)
      });
    }
    else {
      rej('Failed to create new hobby');
    }
  })
  .catch(function (error) {
    rej(error)
  })
});


export default API; 