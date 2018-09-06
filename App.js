import { createStackNavigator } from 'react-navigation'

import HomeScreen from './components/HomeScreen'
import AboutMovieScreen from './components/AboutMovieScreen'


const App = createStackNavigator({
  Home: { screen: HomeScreen },
  AboutMovie: { screen: AboutMovieScreen }
});

export default App;

