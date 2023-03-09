import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image } from 'react-native';
import HomeScreen from './pageComponents/HomeScreen';
import FilterScreen from './pageComponents/FilterScreen';
import UploadScreen from './pageComponents/UploadScreen';
import FavoriteScreen from './pageComponents/FavoriteScreen';
import MyPageScreen from './pageComponents/MyPageScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({route}) => ({
          // headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? require('./assets/icons/home_selected.png') : require('./assets/icons/home.png');
            } else if (route.name === "Filter") {
              iconName = focused ? require('./assets/icons/filter_selected.png') : require('./assets/icons/filter.png');
            } else if (route.name === "Upload") {
              iconName = focused ? require('./assets/icons/upload_selected.png') : require('./assets/icons/upload.png');
            } else if (route.name === "My Page") {
              iconName = focused ? require('./assets/icons/mypage_selected.png') : require('./assets/icons/mypage.png');
            } else if (route.name === "Favorite") {
              iconName = focused ? require('./assets/icons/favorite_selected.png') : require('./assets/icons/favorite.png');
            }
            return <Image source={iconName} style={{width: 24, height: 24}}></Image>
          }
        })}
        tabBarOption={{ activeTintColor: 'blue', inactiveTintColor: 'gray'}}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Filter" component={FilterScreen} />
        <Tab.Screen name="Upload" component={UploadScreen} />
        <Tab.Screen name="Favorite" component={FavoriteScreen} />
        <Tab.Screen name="My Page" component={MyPageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default App;

const styles = StyleSheet.create({
});
