'use strict';

var React = require('react-native');
var { Image, StyleSheet, Text, TouchableOpacity, View } = React;

class MenuItem extends React.Component {
  render() {
    var image = this.props.image;
    var leftPadding = MenuItem.iconWidth - 0; // image.width;

    return (
      <TouchableOpacity onPress={this.userPressedMenuItem.bind(this)}>
        <View style={styles.menuItem}>
          <Image source={image} style={styles.icon} />
          <Text style={styles.menuTitle}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  userPressedMenuItem() {
    var actionDefinedOnButton = this.props.onPress;

    if (actionDefinedOnButton) {
      this.props.onPress();
    }
  }
}

MenuItem.iconWidth = 70;

var styles = StyleSheet.create({
  icon: {
    left: 10,
    position: 'absolute',
  },
  menuItem: {
    borderWidth: 1,
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderBottomColor: '#ccc',
    height: 40,
    paddingTop: 8,
    paddingLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuTitle: {
    left: 50,
    fontSize: 12,
    color: '#75787b',
    fontFamily: 'OpenSans',
    position: 'absolute',
  }
});

module.exports = MenuItem;
