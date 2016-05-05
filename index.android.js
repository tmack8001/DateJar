/**
 * DateJar React Native Project
 * https://github.com/tmack8001/datejar
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  DrawerLayoutAndroid,
  ListView,
  StyleSheet,
  Text,
  ToolbarAndroid,
  TouchableOpacity,
  View
} from 'react-native';

import DateList from './DateList';
import MenuItem from './MenuItem';

var MOCKED_DATES_DATA = require('./data/date_coupons.json');

class DateJar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(MOCKED_DATES_DATA['dates']),
      loaded: true
    });
  }

  onActionSelected(position) {
    if (position === 0) {
      // TODO: showSettings();
    }
  }

  userPressedMenuItem() {
    var actionDefinedOnButton = this.props.onPress;

    if (actionDefinedOnButton) {
      this.props.onPress();
    }
  }

  //image={require("path/to/image.png")
  render() {
    var title = this.state.data ? this.state.data : 'Home';
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <MenuItem title={'My Dates'} />
      </View>
    );
    return (
    <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>
        <View style={styles.container}>
          <ToolbarAndroid
            // logo={require('./hamburger_icon.png')}
            title={title}
            titleColor="white"
            style={styles.toolbar}
            // actions={[{title: 'Settings', icon: require('./icon_settings.png'), show: 'always'}]}
            onActionSelected={this.onActionSelected}/>
          <DateList
            dataSource={this.state.dataSource}
            dataLoaded={this.state.loaded} />
        </View>
      </DrawerLayoutAndroid>
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
    backgroundColor: '#880d4f' // primary
  },
  toolbar: {
    backgroundColor: '#690a3d', // primary-dark
    height: 56
  }
});

AppRegistry.registerComponent('DateJar', () => DateJar);
