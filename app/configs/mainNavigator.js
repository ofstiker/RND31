/**
 * @flow weak
 * file name  : mainNavigator.js
 * input      :
 * output     :
 * todo       : stack, tab
*/

import React from 'react';
import { View, Button } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import TodoList from '../screens/TodoList';
import TodoView from '../screens/TodoView';
import TodoStatus from '../screens/TodoStatus';
import TodoSetting from '../screens/TodoSetting';
import TodoAdd from '../screens/TodoAdd';

const tabNavigator = TabNavigator({
  TodoView: {
    screen: TodoView,
    navigationOptions: {
      tabBarLabel: 'TodoView',
    },
  },
  TodoStatus: {
    screen: TodoStatus,
    navigationOptions: {
      tabBarLabel: 'TodoStatus',
    },
  },
  TodoSetting: {
    screen: TodoSetting,
    navigationOptions: {
      tabBarLabel: 'TodoSetting',
    },
  },
});

const MainNavigator = StackNavigator({
  TodoList: {
    screen: TodoList,
    navigationOptions: ({ navigation }) => ({
      title: 'TodoList',
      headerRight: (
        <View>
          <Button
            title='ADD'
            onPress={() => navigation.navigate('TodoAdd')}
          />
        </View>
      ),
    }),
  },
  TodoTabView: {
    screen: tabNavigator,
  },
  TodoAdd: {
    screen: TodoAdd,
    navigationOptions: {
      title: 'TodoAdd',
    },
  },
}, {
  initialRouteName: 'TodoList',
});

export default MainNavigator;
