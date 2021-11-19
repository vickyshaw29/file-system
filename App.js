import React from 'react';
import Header from './components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import HomePage from './components/Home/HomePage';
import AddFile from './components/common/AddFile';
import AddFolder from './components/common/AddFolder';

export default function App() {
  const { Screen, Navigator } = createNativeStackNavigator();

  let persistor = persistStore(store);
  return (
    <NavigationContainer>
      <Header />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="home"
          >
            <Screen name="HomePage" component={HomePage} />
            <Screen name="AddFile" component={AddFile} />
            <Screen name="AddFolder" component={AddFolder} />
          </Navigator>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
