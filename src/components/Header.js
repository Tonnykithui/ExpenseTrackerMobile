import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { CardDisp } from "./Card";

export const Header = () => {
  return (
    <View style={{ backgroundColor: 'white', width: "100%" }}>
      <View style={styles.topSection}>
        <View style={styles.hero}>
          <View style={styles.profile}>
            <Ionicons name="md-person-circle-outline" size={24} color="blue" style={{marginRight: 10}}/>
            <View style={{}}>
              <Text style={{color: '#616471'}}>Welcome!</Text>
              <Text style={{fontWeight: 'bold'}}>John Doe</Text>
            </View>
          </View>
          <Feather name="settings" size={24} color="black" />
        </View>
        <View style={styles.gradientCard}>
            <CardDisp />
        </View>
      </View>
    </View>
  );
};

const { height } = Dimensions.get("window");
const quarterHeight = height / 3.5;

const styles = StyleSheet.create({
  header: {
    fontSize: 10,
    fontWeight: "bold",
  },
  topSection: {
    height: quarterHeight,
    padding: 20,
    width: "100%",
  },
  hero: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: '25%',
    alignItems: 'center',
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  gradientCard: {
    // height: '60%' 
  }
});