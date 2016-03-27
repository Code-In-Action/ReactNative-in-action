/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.style_0}>
        <View style={styles.style_1}>
          <Text style={{
            marginTop: 40,
            fontSize: 25
          }}>1／4高</Text>
          <Text style={{
            marginTop: 40,
            fontSize: 25
          }}>1／4高</Text>
        </View>
        <View style={styles.style_1}>
          <Text style={{
            marginTop: 40,
            fontSize: 25
          }}>1／4高</Text>
          <Text style={{
            marginTop: 40,
            fontSize: 25
          }}>1／4高</Text>
        </View>
        <View style={{
          flex: 10
        }}>
          <Text style={{
            marginTop: 40,
            fontSize: 25
          }}>1／2高</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  style_0: {
    flex: 1
  },
  style_1: {
    flex: 5,
    height: 40,
    borderWidth: 1,
    borderColor: 'red'
  }

});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
