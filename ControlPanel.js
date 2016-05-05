'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from './Button';

class NavigationalDrawer extends Component {
  render() {
    return (
      <View>
        <Text style={styles.controlPanelWelcome}>
          Navigational Drawer
        </Text>
        <Button
          onPress={this.props.closeDrawer}
          text="Close Drawer"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  controlPanelText: {
    color: 'white'
  },
  controlPanelWelcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  categoryLabel: {
    fontSize: 15,
    textAlign: 'left',
    left: 10,
    padding: 10,
    fontWeight: 'bold'
  }
});

export default NavigationalDrawer;