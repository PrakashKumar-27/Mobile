import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text, Image, StyleSheet } from "react-native";

const CustomDrawerContent = (props) => {
  const currentYear = new Date().getFullYear();

  return (
    <DrawerContentScrollView {...props} style={styles.drawerContainer}>
      <View
        style={styles.drawerHeader}
        contentContainerStyle={styles.drawerContent}
      >
        <Image
          source={require("../../assets/images/react-logo.png")}
          style={styles.drawerLogo}
        />
        <Text style={styles.drawerTitle}>My App</Text>
      </View>
      <DrawerItemList {...props} />
      <View style={styles.drawerFooter}>
        <Text style={styles.copyright}>
          © {currentYear} KPMG Global Services.
        </Text>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7f7f7",
    marginBottom: 20,
  },
  drawerContainer: {
    flex: 1,
  },
  drawerContent: {
    flex: 1,
  },
  drawerLogo: {
    width: 80,
    height: 80,
  },
  drawerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  drawerFooter: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#f7f7f7",
  },
  copyright: {
    fontSize: 12,
    color: "#888",
    textAlign: "center",
  },
});

export default CustomDrawerContent;
