import React from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'
import MarqueeText from 'react-native-marquee';

export default class AboutMovieScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }
  
  componentDidMount(){
    return fetch('https://swapi.co/api/films/' + this.props.navigation.state.params.movienum)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){

      });
    })
    .catch((error) =>{
      console.error(error);
    });
  }

  render (){
    
    if(this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="rgba(212, 175, 55, 0.77)"/>
        </View>
      );
    }


    var opening_crawl = this.state.dataSource['opening_crawl'].replace(/[\r\n\x0B\x0C\u0085\u2028\u2029]+/g," ")
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.dataSource['title']}</Text>
        <Text style={styles.title}>Episode: {this.state.dataSource['episode_id']}</Text>
        <MarqueeText
          style={{ fontSize: 18, color: 'rgba(212, 175, 55, 0.88)', paddingTop: 20}}
          duration={30000}
          marqueeOnStart={true}
          loop={true}
          marqueeDelay={1000}
          marqueeResetDelay={1000}
        >
          {opening_crawl}
        </MarqueeText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  P: {
    fontWeight: '900',
    color: 'rgba(212, 175, 55, 0.88)',
    fontSize: 14
  },
  title: {
    fontWeight: '900',
    color: 'rgba(212, 175, 55, 0.88)',
    fontSize: 24
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});