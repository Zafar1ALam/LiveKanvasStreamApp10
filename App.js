
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  NavigationContainer, DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';

import {
  ActivityIndicator, StyleSheet, Text, View, useColorScheme,

} from "react-native";

import { Provider as PaperProvider, DarkTheme as PaperDarkTheme } from 'react-native-paper';

import COLORS from './src/utilities/colors/Color';
import Login from './src/screen/Login';
import CreateAccount from './src/screen/CreateAccount';
import ForgetPassword from './src/screen/ForgetPassword';
import Verification from './src/screen/Verification';
import UpdatePassword from './src/screen/UpdatePassword';
import DefineYourSelf from './src/screen/DefineYourSelf';
import ChooseInterest from './src/screen/ChooseInterest';
import Home from './src/screen/Home';
import SpecialForYou from './src/screen/SpecialForYou';
import Explore from './src/screen/Explore';
import UpcomingRecent from './src/screen/UpcomingRecent';
import Channels from './src/screen/Channels';
import VedioTitle from './src/screen/VedioTitle';
import Chat from './src/screen/Chat'
import SelectUserToChat from './src/screen/SelectUserToChat'
import TabNavigation1 from './src/route/TabNavigation1';
import Notifications from './src/screen/Notifications';
import CreatorDashboard from './src/screen/CreatorDashboard'
import ViewerDashboard from './src/screen/ViewerDashboard';
import AddAudio from './src/screen/AddAudio';
import AddVideo from './src/screen/AddVideo';
import AccountSetting from './src/screen/AccountSetting';
import Account from './src/screen/Account';
import PaymentSettings from './src/screen/PaymentSettings';
import Following from './src/screen/Following';
import Follower from './src/screen/Follower';
import WatchHistory from './src/screen/WatchHistory';
import UserNameHereSettingIcon from './src/screen/UserNameHereSettingIcon';
import UserNameHereFollowingBlock from './src/screen/UserNameHereFollowingBlock';
import BackgroundVedio from './src/screen/BackgroundVedio';
import BackgroundAudio from './src/screen/BackgroundAudio';
import Buy from './src/screen/Buy';
const Stack = createNativeStackNavigator();
const App = props => {
  const CustomDarkTheme = {

    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: COLORS.black101010,
      text: COLORS.whiteFFFFFF,
      //border: COLORS.black000000_20,
      boder: '#707070',// COLORS.grey707070,
      surface: COLORS.black101010,
      placeholder: COLORS.whiteFFFFFF,
      // onSurface: COLORS.black000000,
      backdrop: COLORS.black000000
    },
  };
  return (

    <PaperProvider theme={CustomDarkTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'UserNameHereSettingIcon'}
        //  initialRouteName={'Account'}
        >
          <Stack.Screen name="Login" component={Login} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="Buy" component={Buy} options={{
            headerShown: false,
          }} />

          {/* <Stack.Screen name="Home" component={Home} options={{
            headerShown: false,
          }} /> */}
          <Stack.Screen name="TabNavigation1" component={TabNavigation1} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="UserNameHereSettingIcon" component={UserNameHereSettingIcon} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="UserNameHereFollowingBlock" component={UserNameHereFollowingBlock} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="AccountSetting" component={AccountSetting} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="WatchHistory" component={WatchHistory} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="PaymentSettings" component={PaymentSettings} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="SpecialForYou" component={SpecialForYou} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="VedioTitle" component={VedioTitle} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="BackgroundVedio" component={BackgroundVedio} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="BackgroundAudio" component={BackgroundAudio} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="Notifications" component={Notifications} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="Chat" component={Chat} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="Following" component={Following} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="Follower" component={Follower} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="SelectUserToChat" component={SelectUserToChat} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="AddAudio" component={AddAudio} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="AddVideo" component={AddVideo} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="CreatorDashboard" component={CreatorDashboard} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="ViewerDashboard" component={ViewerDashboard} options={{
            headerShown: false,
          }} />
          {/* <Stack.Screen name="Channels" component={Channels} options={{
            headerShown: false,
          }} /> */}
          <Stack.Screen name="UpcomingRecent" component={UpcomingRecent} options={{
            headerShown: false,
          }} />
          {/* <Stack.Screen name="Explore" component={Explore} options={{
            headerShown: false,
          }} /> */}

          <Stack.Screen name="ChooseInterest" component={ChooseInterest} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="DefineYourSelf" component={DefineYourSelf} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="UpdatePassword" component={UpdatePassword} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="Verification" component={Verification} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="Account" component={Account} options={{
            headerShown: false,
          }} />

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
};

App.propTypes = {

};

export default App;