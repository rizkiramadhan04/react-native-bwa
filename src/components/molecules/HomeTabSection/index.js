import React, { useEffect } from 'react'
import { StyleSheet, View, Dimensions, Text } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4, FoodDummy5 } from '../../../assets';
import ItemListFood from '../ItemListFood';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getFoodDataByTypes } from '../../../redux/action';

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

const NewTaste = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {newTaste} = useSelector((state) => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodDataByTypes('new_food'));
  }, []);

    return (
      <View style={styles.containerNewTaste}>

          { 
            newTaste.map((item) => {
              return (
                <ItemListFood 
                  key={item.id}
                  image={{ uri: item.picturePath }}
                  type="product"
                  name={item.name}
                  price={item.price}
                  rating={item.rate}
                  onPress={() => navigation.navigate('FoodDetail', item)}
                />
              );
            })
          }

      </View>
    )
  };
 
const Popular = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {popular} = useSelector((state) => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodDataByTypes('popular'));
  }, []);
  
    return (
      <View style={styles.containerPopular}>

           { 
            popular.map((item) => {
              return (
                <ItemListFood
                  key={item.id}
                  type="product" 
                  image={item.picturePath}
                  name={item.name}
                  price={item.price}
                  rating={item.rate}
                  onPress={() => navigation.navigate('FoodDetail', item)}
                />
              );
            })
           }

      </View>
    )
};

const Recommended = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {recommended} = useSelector((state) => state.homeReducer);

    useEffect(() => {
      dispatch(getFoodDataByTypes('recommended'));
    }, []);
    return (
      <View style={styles.containerRecommended}>

          { 
            recommended.map((item) => {
              return (
                <ItemListFood
                  key={item.id}
                  type="product" 
                  image={{ uri: item.picturePath }}
                  name={item.name}
                  price={item.price}
                  rating={item.rate}
                  onPress={() => navigation.navigate('FoodDetail', item)}
                />
              );
            })
           }

      </View>
    )
  };
 
const initialLayout = { width: Dimensions.get('window').width };


const HomeTabSection = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: '1', title: 'New Taste' },
      { key: '2', title: 'Popular' },
      { key: '3', title: 'Recommended' },
    ]);

    const renderScene = SceneMap({
      1: NewTaste,
      2: Popular,
      3: Recommended,
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

export default HomeTabSection;

const styles = StyleSheet.create({
  tabView: {
    backgroundColor: 'white',
  },

  indicator: {
    backgroundColor: '#020202',
    height: 3,
    width: '15%',
    marginLeft: '3%',
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
