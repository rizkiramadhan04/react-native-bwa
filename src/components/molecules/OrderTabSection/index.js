import React from 'react'
import { StyleSheet, View, Dimensions, Text  } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4, FoodDummy5 } from '../../../assets';
import ItemListFood from '../ItemListFood';
import { useNavigation } from '@react-navigation/native';

const renderTabBar = props => (
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
  
  const InProgress = () => {
    const navigation = useNavigation();
      return (
        <View style={styles.containerNewTaste}>
  
            <ItemListFood 
              image={FoodDummy2}
              items={10}
              type="in-progress"
              name="Burger Tamayo"
              price={35000}
              rating={4.5}
              onPress={() => navigation.navigate('FoodDetail')}
            />
  
        </View>
      )
    };
   
  const PastOrders = () => {
      return (
        <View style={styles.containerPopular}>
  
             <ItemListFood
             items = {2}
              type="past-orders" 
              image={FoodDummy2}
              name="Burger Tamayo"
              date= "Jun 12, 14:00"
              status = "CANCELLED"
              onPress={() => navigation.navigate('OrderDetail')}
              price={10000}
            />
  
              <ItemListFood
              items = {3}
              type="past-orders" 
              image={FoodDummy2}
              name="Burger Tamayo"
              date= "Jun 12, 14:00"
              status = "Success"
              onPress={() => navigation.navigate('OrderDetail')}
              price={10000}
            />
  
        </View>
      )
  };
   
  const initialLayout = { width: Dimensions.get('window').width };
  
  
  const OrderTabSection = () => {
      const [index, setIndex] = React.useState(0);
      const [routes] = React.useState([
        { key: '1', title: 'In Progress' },
        { key: '2', title: 'Past Order' },
      ]);
  
      const renderScene = SceneMap({
        1: InProgress,
        2: PastOrders,
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
  
  }
  
  export default OrderTabSection;
  
  const styles = StyleSheet.create({
    tabView: {
      backgroundColor: 'white',
    },
  
    indicator: {
      backgroundColor: '#020202',
      height: 3,
      width: '15%',
      marginLeft: '3%'
    },
  
    tabBarStyle: {
        backgroundColor: 'white',
        borderBottomColor: '#F2F2F2',
    },
  
    tabStyle: {
      fontFamily: 'Poppins-Medium',
      color: '#8D92A3',
      width: 'auto',
    },
  
    containerNewTaste: {
        paddingTop: 8,
        paddingHorizontal: 24,
    },
  
    containerPopular: {
      paddingTop: 8,
      paddingHorizontal: 24,
  },
  
  containerRecommended: {
    paddingTop: 8,
    paddingHorizontal: 24,
  },
  
  });