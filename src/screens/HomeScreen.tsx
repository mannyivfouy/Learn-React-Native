import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

export default function HomeScreen() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          SALA ENROLLMENT
        </Text>

        <View style={styles.profileContainer}>
          <Image source={require('../../assets/meme.jpg')} style={styles.profileImage} />
        </View>
      </View>
      <View>
        <Text style={styles.subtitle}>
          Find Your Favorite University & Major
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="gray" />
          <TextInput placeholder="Search University" style={styles.searchInput} />
        </View>
      </View>

      <View style={styles.filterRow}>
        {["All", "University", "Institute"].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.filterChip, selectedFilter === item && styles.filterChipActive]} onPress={() => setSelectedFilter(item)}
          >
            <Text style={[styles.filterText, selectedFilter === item && styles.filterTextActive]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.cardContainerHeader}>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="flame" size={18} color="orange" />
            <Text style={{ marginLeft: 5, fontWeight: "bold" }}>
              Popular
            </Text>
          </View>

          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "#007A6D", fontWeight: "600" }}>
              Explore More
            </Text>

            <Ionicons
              name="arrow-forward-outline"
              size={16}
              color="#007A6D"
              style={{ marginLeft: 4 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <ImageBackground
            source={require("../../assets/setec.webp")}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 12 }}
          >
            <View style={styles.overlay}>
              <Text style={styles.cardTitle}>
                Royal University of Phnom Penh
              </Text>
              <View style={styles.cardDescription}>
                <Text style={styles.textDescription}>
                  Public University
                </Text>
                <Text style={styles.textPrice}>
                  580$ - 780$
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.card}>
          <ImageBackground
            source={require("../../assets/rupp.jpg")}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 12 }}
          >
            <View style={styles.overlay}>
              <Text style={styles.cardTitle}>
                Royal University of Phnom Penh
              </Text>
              <View style={styles.cardDescription}>
                <Text style={styles.textDescription}>
                  Public University
                </Text>
                <Text style={styles.textPrice}>
                  300$ - 2000$
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDECE7',
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
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
    width: 40,
    height: 40,
    backgroundColor: "#F5F5F5",
    borderColor: "#007A6D",
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },

  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },

  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 50
  },

  searchInput: {
    flex: 1,
    marginLeft: 10
  },

  filterRow: {
    flexDirection: "row",
    marginTop: 15
  },

  filterChip: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginRight: 10
  },

  filterChipActive: {
    backgroundColor: "#007A6D",
  },

  filterText: {
    color: "gray",
    fontSize: 12,
  },

  filterTextActive: {
    color: "white",
    fontWeight: "bold",
  },

  cardContainer: {
    height: 500,
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 12,
    marginTop: 20,
  },

  cardContainerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 15
  },

  card: {
    backgroundColor: "#F4FBFA",
    borderRadius: 12,
    marginTop: 15,
    height: 200
  },

  imageBackground: {
    flex: 1,
    justifyContent: "flex-end",
  },

  overlay: {
    backgroundColor: "#3232327a",
    padding: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },

  cardDescription: {

    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  textDescription: {
    color: "#ddd",
  },

  textPrice: {
    fontWeight: "bold",
    color: "#fff",
  }
});