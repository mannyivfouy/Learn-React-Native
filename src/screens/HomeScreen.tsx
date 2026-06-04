import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const universities = [
    {
      id: 1,
      title: "SETEC Institute",
      type: "Institute",
      priceRange: "580$ - 1080$",
      image: require("../../assets/setec.webp"),
      badge: "Popular",
      location: "Phnom Penh"
    },
    {
      id: 2,
      title: "Royal University of Phnom Penh",
      type: "Public University",
      priceRange: "300$ - 2000$",
      image: require("../../assets/rupp.jpg"),
      badge: "Popular",
      location: "Phnom Penh"
    },
    {
      id: 3,
      title: "Institute of Technology of Cambodia",
      type: "Public Institute",
      priceRange: "600$ - 2800$",
      image: require("../../assets/itc.webp"),
      badge: "Popular",
      location: "Phnom Penh"
    }
  ]

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#CDECE7"}}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerTitle}>
              <Ionicons name="school" size={30} color="#007A6D" />
              <Text style={styles.title}>
                UniFind
              </Text>
            </View>

            <View style={styles.profileContainer}>
              <Image source={require('../../assets/meme.jpg')} style={styles.profileImage} />
            </View>
          </View>
          <View>
            <Text style={styles.subtitle}>
              Discover top academic institutions, compare courses, and start your educational journey with confidence.
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

              <View style={styles.cardHeader}>
                <Ionicons name="flame" size={18} color="orange" />
                <Text style={{ marginLeft: 5, fontWeight: "bold" }}>
                  Popular
                </Text>
              </View>

              <TouchableOpacity style={styles.cardHeader}>
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

            {universities.map((item) => (
              <View key={item.id} style={styles.card}>
                <ImageBackground source={item.image} style={styles.imageBackground} imageStyle={{ borderRadius: 12 }}>
                  <View style={styles.badge}>
                    <Ionicons name="navigate" size={18} color="white" />
                    <Text style={styles.badgeText}>
                      {item.location}
                    </Text>
                  </View>

                  <View style={styles.overlay}>
                    <Text style={styles.cardTitle}>
                      {item.title}
                    </Text>
                    <View style={styles.cardDescription}>
                      <Text style={styles.textDescription}>
                        {item.type}
                      </Text>

                      <Text style={styles.textPrice}>
                        {item.priceRange}
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 40,
  },

  container: {
    backgroundColor: '#CDECE7',
    padding: 20,    
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },

  headerTitle: {
    flexDirection: "row",
    alignItems: "center"
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#007A6D",
    marginLeft: 10
  },

  subtitle: {
    color: "gray",
    fontStyle: "italic",
    width: 280,
    fontSize: 12,
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
    height: 200,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center"
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
  },

  badge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#007A6D",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center"
  },

  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
    marginLeft: 5
  },
});