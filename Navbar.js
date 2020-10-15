import React, { Component } from 'react';
import { Navigator, Text } from 'react-native';

class Navbar extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Awesome Scene', index: 0 }}
        renderScene={(route, Navigator) => <Text> Hello {route.title}!</Text>}
        style={{ padding: 100 }}
      />
    );
  }
}

export default Navbar;
