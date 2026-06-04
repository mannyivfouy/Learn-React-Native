import { View, StyleSheet, Text, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          SETEC E-Learning
        </Text>

        <View style={styles.profileContainer}>
          <Image source={require('../../assets/meme.jpg')} style={styles.profileImage}/>
        </View>
      </View>
      <View>
        <Text style={styles.subtitle}>
          Begin Your Education With Us,
        </Text>
        <Text style={styles.subtitle}>
          End With Job Opportunity
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Web Development
        </Text>
        <Text style={styles.cardDescription}>
          HTML
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 50,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#007A6D"
  },

  subtitle: {
    color: "gray",
    fontStyle: "italic",
    fontSize: 12
  },

  profileContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#F5F5F5",
    borderColor: "#747070",
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },

  profileImage:{
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },

  card: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
    height: 200
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold"
  },

  cardDescription: {
    color: "gray",
    marginTop: 5
  }
});