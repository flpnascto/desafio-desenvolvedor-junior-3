import React, { useContext } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList, } from '@react-navigation/drawer';
  import SignIn from './pages/SignIn';
import { AuthContext } from "./contexts/auth";
import Dashboard from './pages/Dashboard';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function MenuDrawer() {
  const { signed } = useContext(AuthContext);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      { signed ? (
        <>
          <Drawer.Screen name="Dashboard" component={Dashboard} />
        </>
        ) : (
        <>
          <Drawer.Screen name="Sing In" component={SignIn} />
        </>
        )}
    </Drawer.Navigator>
  );
};
