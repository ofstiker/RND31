import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './app/configs/configureStore';
import MainNavigator from './app/configs/mainNavigator';

export default class MainApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    )
  };
}
