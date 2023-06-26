import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './contexts/auth';
import MenuDrawer from './MenuDrawer';


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <AuthProvider>
          <MenuDrawer />
        </AuthProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
    
  );
}
