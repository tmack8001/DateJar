/**
 * DateJar React Native Project
 * https://github.com/tmack8001/datejar
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

var LinearGradient = require('react-native-linear-gradient');

class DateList extends Component {
  setParentState(args) {
    this.props.setParentState(args);
  }

  render() {
    const { dataLoaded, dataSource } = this.props;
    if (!dataLoaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={dataSource}
        renderRow={this.renderDate}
        style={styles.listView}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>Loading dates...</Text>
      </View>
    );
  }

  renderDate(date) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.backdrop}
          source={{uri: date.images[0].uri}}>
          <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
                          style={styles.backdropView}>
            <Text style={styles.title}>{date.title}</Text>
            <Text style={styles.subtitle}>{date.subtitle}</Text>
          </LinearGradient>
        </Image>
      </View>
    );
  }
}

// <color name="primary">#e91e63</color>
// <color name="primary_dark">#c2185b</color>
// <color name="primary_light">#f8bbd0</color>
// <color name="accent">#7c4dff</color>
//
// <!-- Text and Icon Palette -->
// <color name="text_icons">@android:color/white</color>
// <color name="primary_text">#212121</color>
// <color name="secondary_text">#727272</color>
// <color name="divider_color">#b6b6b6</color>
//
// <!-- Gradient start color of the overlay on the coupon image -->
// <color name="overlay_bg_color">#CC000000</color>
//
// <!-- Background color of the app -->
// <color name="bg_color">#F8BBD0</color>
//
// <!-- Pressed state color for a coupon -->
// <color name="touch_overlay_bg_color">#33999999</color>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#880d4f'
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#880d4f'
  },
  backdrop: {
    alignSelf: 'stretch',
    width: null,
    height: 200
  },
  backdropView: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    padding: 16
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'RobotoCondensed-Regular'
  },
  subtitle: {
    color: '#BDBDBD',
    fontSize: 16,
    fontFamily: 'RobotoCondensed-Regular'
  }
});

export default DateList;