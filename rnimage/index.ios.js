import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  ImagePickerIOS,
  InteractionManager,
  Image,
} from 'react-native';

export default class rnimage extends Component {
  constructor() {
    super();
    this.state = { image: null };
  }

  componentDidMount() {
    this.pickImage();
  }

  pickImage() {
    ImagePickerIOS.canRecordVideos(() => alert('能获取视频'))
    
    ImagePickerIOS.canUseCamera(() => alert('能获取图片'))
     // openSelectDialog(config, successCallback, errorCallback);
    ImagePickerIOS.openSelectDialog({}, () => {
      this.setState({ image: imageUri });
    }, error => console.error(error));
  }


  render() {
    return (
      <View style={{ flex: 1,padding: 15 }}>
      <Text>ImagePickerIOS</Text>
        {this.state.image?
          <Image style={{ flex: 1}} source={{ uri: this.state.image }} /> :
          null
        }
      </View>
    );
  }
}


AppRegistry.registerComponent('rnimage', () => rnimage);
