import { Text, View, Pressable, Image, Button } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Icons from '../components/Icons';



function MyTabBar({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
  
    const { colors } = useTheme();

    if (focusedOptions.tabBarVisible === false) {
      return null;
    }
  
    return (
      <View style={{ flexDirection: 'row'}}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <View
              
              
              
              // @ts-ignore On ignoire l'erreur parcequ on utilise pas un format de Theme classique
              style={{ flex: 1 , height:46, backgroundColor: 'white', justifyContent: 'center'}}
            >
              <Text>{route.name}</Text>
                <Icons name={route.name}
          
        />
            </View>
          );
        })}
      </View>
    );
  }

  export default MyTabBar;