import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native';
import ItemListMenu from '../ItemListMenu';

const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabBarStyle}
      tabStyle={styles.tabStyle}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ fontFamily: 'Poppins-Medium', color: focused ? '#020202' : '#8D92A3'}}>
          {route.title}
        </Text>
      )}
    />
  );

  const Account = () => {
    const navigation = useNavigation();
    const signOut = () => {
      AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
        navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
      })
    }

      return (
        <View style={styles.containerAccount}>
  
            <ItemListMenu
                text="Edit Profile"
                onPress= {() => navigation.navigate('EditProfile')}
            />
            
            <ItemListMenu text="Home Address" />
            <ItemListMenu text="Security" />
            <ItemListMenu text="Payments" />
            <ItemListMenu text="SignOut" onPress={signOut} />
  
        </View>
      )
    };
   
  const FoodMarket = () => {
      return (
        <View style={styles.containerFoodMarket}>
  
            <ItemListMenu text="Rate App" />
            <ItemListMenu text="Help Center" />
            <ItemListMenu text="Privacy & Policy" />
            <ItemListMenu text="Terms & Conditions" />
  
        </View>
      )
  };
   
  const initialLayout = { width: Dimensions.get('window').width };

const ProfileTabSection = () => {

      const [index, setIndex] = React.useState(0);
      const [routes] = React.useState([
        { key: '1', title: 'Account' },
        { key: '2', title: 'Food Market' },
      ]);
  
      const renderScene = SceneMap({
        1: Account,
        2: FoodMarket,
      });
        
      return (
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
          style={styles.tabView}
        />
      );
};

export default ProfileTabSection;

const styles = StyleSheet.create({

    tabView: {
        backgroundColor: 'white'
    },

    indicator: {
        backgroundColor: '#020202',
        height: 3,
        width: '15%',
        marginLeft: '3%',
    },

    tabBarStyle: {
        backgroundColor: 'white',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomColor: '#F2F2F2',
        borderBottomWidth: 1,
     },

    tabStyle: {
        width: 'auto'
    },

    containerAccount: {
        paddingTop: 8, 
        paddingHorizontal: 24
    },

    containerFoodMarket: {
        paddingTop: 8, 
        paddingHorizontal: 24
    },
});
