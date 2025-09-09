// app/(drawer)/_layout.tsx
import { Drawer } from "expo-router/drawer";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerStyle: { backgroundColor: "#181818", width: 240 },
        drawerActiveTintColor: "#1DB954",
        drawerInactiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Profile"
        options={{
          title: "Profile",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Playlists"
        options={{
          title: "Playlists",
          drawerIcon: ({ color, size }) => (
            <Feather name="music" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          title: "Settings",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
