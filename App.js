import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import firebase from 'firebase';
import config from './firebaseConfig';
import Router from './src/Router';

export default class App extends React.Component {
	componentWillMount(){
		firebase.initializeApp(config);
    firebase.auth().signInAnonymously();
	}
  render() {
    const store = createStore(reducers,{}, applyMiddleware(ReduxThunk));
    return (
      <Provider store ={store}>
        <Router/>
      </Provider>
    );
  }
}


