import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

import RoundButton from './RoundButton'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor(props){
    super(props);
  }

  render (){
    return(
      <View style={styles.container}>
        <Image style={styles.logo} source={{uri: 'https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG43.png'}}/>
        <RoundButton idx="IV" navigator={this.props.navigation}
          movienum="1"/>
        <RoundButton idx="V" navigator={this.props.navigation}
          movienum="2"/>
        <RoundButton idx="VI" navigator={this.props.navigation}
          movienum="3"/>
        <RoundButton idx="I" navigator={this.props.navigation}
          movienum="4"/>
        <RoundButton idx="II" navigator={this.props.navigation}
          movienum="5"/>
        <RoundButton idx="III" navigator={this.props.navigation}
          movienum="6"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    backgroundColor: "#000",
    height: 128,
    width: 256,
  }, 
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});