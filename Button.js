'use strict';
import React, {
  Component,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class Button extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#B5B5B5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderColor: '#eeeeee',
    borderWidth: 1,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#aaaaaa',
    marginRight: 20,
    marginLeft: 20,
    alignSelf: 'center'
  },
  buttonText: {

  }
});

export default Button;