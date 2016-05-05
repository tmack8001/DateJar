/**
 * DateJar React Native Project
 * https://github.com/tmack8001/datejar
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  ListView,
  StyleSheet,
  View
} from 'react-native';

var drawerStyles = {
  drawer: {
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 3
  },
  container: {
    paddingLeft: 3
  }
};

import Drawer from 'react-native-drawer';
import ControlPanel from './ControlPanel';
import DateList from './DateList';

var toolbarActions = [
  {title: 'Tab 1', show: 'always'},
  {title: 'Tab 2', show: 'never'},
  {title: 'Tab 3', show: 'never'}
];

var MOCKED_DATES_DATA = require('./data/date_coupons.json');

class DateJar extends Component {
  closeControlPanel = () => {
    this._drawer.close()
  };

  openControlPanel = () => {
    this._drawer.open()
  };

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

  render() {
    var title = this.state.data ? this.state.data : 'Home';
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        content={<ControlPanel closeDrawer={() => {this.closeControlPanel()}} />}
        tapToClose={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          // container: { opacity:(2-ratio)/2 },
          container: {
            shadowColor: "#000000",
            shadowOpacity: ratio,
            shadowRadius: 7
          }
        })}>
        <View style={styles.container}>
          <DateList
            dataSource={this.state.dataSource}
            dataLoaded={this.state.loaded} />
        </View>
      </Drawer>
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
