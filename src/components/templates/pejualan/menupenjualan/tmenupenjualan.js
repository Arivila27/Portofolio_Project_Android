import React, {useState,useEffect} from 'react';
import { View, useWindowDimensions,TouchableOpacity,Image,FlatList,Text,Dimensions} from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { myColor } from '../../../../assets/color';
import FirstRoute from './firstRoute';
import SecondRoute from './secondRoute';
import ThreeRoute from './threeRoute';

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  three : ThreeRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Makanan' },
    { key: 'second', title: 'Minuman' },
    { key: 'three', title: 'Meja' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={props => (
        <TabBar
          {...props}
          renderLabel={({ route, color }) => (
            <Text style={{ color: myColor.putih, margin: 8 }}>
              {route.title}
            </Text>
          )}
          style={{backgroundColor: myColor.warnario2,opacity:0.7}}
        />
      )}
      
    />
  );
}