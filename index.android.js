/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import TabBars from './views/common/tabNavigator';
export default class douApp extends Component {
  render() {
    return (
      <TabBars>
      </TabBars>
    );
  }
}
AppRegistry.registerComponent('douApp', () => douApp);
