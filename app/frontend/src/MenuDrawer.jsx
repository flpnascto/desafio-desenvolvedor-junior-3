import React, { useContext } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList, } from '@react-navigation/drawer';
import { AuthContext } from "./contexts/auth";
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignUp from "./pages/SignUp";
import BlogPosts from "./pages/BlogPosts";

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
          <Drawer.Screen name="Blogs" component={BlogPosts} />
          <Drawer.Screen name="Dashboard" component={Dashboard} />
        </>
        ) : (
        <>
          <Drawer.Screen name="SignIn" component={SignIn} />
          <Drawer.Screen name="SignUp" component={SignUp} />
        </>
        )}
    </Drawer.Navigator>
  );
};
