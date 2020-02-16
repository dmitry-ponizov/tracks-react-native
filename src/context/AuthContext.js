import createDataContext from './createDataContex';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-community/async-storage';
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ERROR':
      return {...state, errorMessage: action.payload};
    case 'SIGNUP':
      return {errorMessage: '', token: action.payload};
    default:
      return state;
  }
};

const signup = dispatch => {
  return async ({email, password}) => {
    
    try {
      const response = await trackerApi.post('/signup', {email, password});
      console.log(response)
      await AsyncStorage.setItem('token', response.data.token);
      // await AsyncStorage.getItem('token')
      dispatch({type: 'SIGNUP', payload: response.data.token});

      navigate('TrackList');
    } catch (err) {
      console.log(err)
      dispatch({
        type: 'ADD_ERROR',
        payload: 'Something went wrong with sign up',
      });
    }
  };
};

const signin = dispatch => {
  return ({email, password}) => {};
};

const signout = () => {
  return () => {};
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signup, signin, signout},
  {token: null, errorMessage: ''},
);
