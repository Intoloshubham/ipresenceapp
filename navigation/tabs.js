import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import { Account, Setting, Profile, Calander } from '../screens/bottomTabs/index.js';
import UserDashboard from '../screens/companyDashboard/UserDashboard.js';
const Tab = createBottomTabNavigator();

// const TabBarCustomButton = ({ children, onPress }) => {
//   return (
//     <TouchableOpacity
//       style={{
//         top: -12,
//         justifyContent: 'center',
//         alignItems: 'center',
//         ...styles.shadow,
//       }}
//       onPress={onPress}>
//       <LinearGradient
//         colors={[COLORS.success_400, COLORS.success_800]}
//         style={{
//           width: 45,
//           height: 45,
//           borderRadius: 35,
//         }}>
//         {children}
//       </LinearGradient>
//       <Text
//         style={{
//           color: COLORS.black,
//           ...FONTS.body5,
//         }}>
//         Report
//       </Text>
//     </TouchableOpacity>
//   );
// };
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        // headerShown: false,
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 10,
          backgroundColor: COLORS.white,
          borderTopColor: 'transparent',
          height: 100,
        },
        // headerTitleAlign: 'left',
        // headerRight: () => (
        //   <View
        //     style={{
        //       alignItems: 'center',
        //       justifyContent: 'center',
        //       marginHorizontal: SIZES.radius,
        //     }}>
        //     <Image
        //       source={images.consoft_PNG}
        //       resizeMode="contain"
        //       style={{ height: 100, width: 100 }}
        //     />
        //   </View>
        // ),
      }}>
      <Tab.Screen
        name={'Dashboard'}
        component={UserDashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={icons.dashboard}
                resizeMode="contain"
                style={{
                  height: focused ? 20 : 18,
                  width: focused ? 20 : 18,
                  tintColor: COLORS.blue,
                }}
              />
              <Text
                style={{
                  color: COLORS.blue,
                  ...FONTS.body5,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          // headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={icons.setting}
                style={{
                  height: focused ? 20 : 18,
                  width: focused ? 20 : 18,
                  tintColor: COLORS.blue,
                }}
              />
              <Text
                style={{
                  color: COLORS.blue,
                  ...FONTS.body5,
                }}>
                Setting
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Calander"

        component={Calander}
        options={{
          // headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={icons.date}
                style={{
                  height: focused ? 20 : 18,
                  width: focused ? 20 : 18,
                  tintColor: COLORS.blue,
                }}
              />
              <Text
                style={{
                  color: COLORS.blue,
                  ...FONTS.body5,
                }}>
                Calender
              </Text>
            </View>
          ),
          // tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          // headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={icons.account}
                style={{
                  height: focused ? 20 : 18,
                  width: focused ? 20 : 18,
                  tintColor: COLORS.blue,
                }}
              />
              <Text
                style={{
                  color: COLORS.blue,
                  ...FONTS.body5,
                }}>
                Account
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          // headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={icons.profile}
                style={{
                  height: focused ? 20 : 18,
                  width: focused ? 20 : 18,
                  tintColor: COLORS.blue,
                }}
              />
              <Text
                style={{
                  color: COLORS.blue,
                  ...FONTS.body5,
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.39,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
export default Tabs;
