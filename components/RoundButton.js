import * as React from 'react'
import { Text, TouchableOpacity} from 'react-native';

export default class RoundButton extends React.Component {
  constructor(props) {
    super(props)
  }

  onPress = () => {
    this.props.navigator.navigate('AboutMovie', {movienum: this.props.movienum});
  }
  render() {
    return (
      <TouchableOpacity
          style={{
              borderWidth:4,
              borderColor:'rgba(212,175,55, 0.77)',
              alignItems:'center',
              justifyContent:'center',
              width:50,
              height:50,
              backgroundColor:'#000',
              borderRadius:50,
            }}
          onPress={this.onPress}
        >
          <Text style={{fontWeight: '900', color: 'rgba(212, 175, 55, 0.77)'}}>{this.props.idx}</Text>
        </TouchableOpacity>
    );
  }
}