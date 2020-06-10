import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import searchScreen from './src/screens/searchScreen';
import ResultsShowScreens from './src/screens/ResultsShowScreens';

const navigator = createStackNavigator({
  Search:searchScreen,
  ResultShow:ResultsShowScreens
},{
  initialRouteName: 'Search',
  defaultNavigationOptions:{
    title:'Search your Fav Food'
  }
});


export default createAppContainer(navigator);