import Index from './pages/index'
import {
    NavigatorIOS,
	  AppRegistry,
    StyleSheet,
} from 'react-native';

const NV = React.createClass({
    render: function(){
      return(
          <NavigatorIOS
            style={styles.container}
            initialRoute={{
              title: '首页',
              component: Index,
            }}
            />
      );
    }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


AppRegistry.registerComponent('HelloWorld', () => NV);
