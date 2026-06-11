import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
export default function HomeScreen() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const navigation = useNavigation<any>();
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id]
    )
  }

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

  const topRateInstitutes = [
    {
      id: 1,
      title: "SETEC Institute",
      type: "Institute",
      priceRange: "580$ - 1080$",
      image: require("../../assets/setec.webp"),
      badge: "Popular",
      location: "Phnom Penh",
      rate: 8.9
    }
  ]

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#CDECE7" }}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Ionicons name="school" size={30} color="#007A6D" />
          <Text style={styles.appTitle}>
            UniFind
          </Text>
        </View>

        <View >
          <Ionicons name="notifications" size={23} color="#007A6D" />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>

          <View>
            <Text style={styles.title}>
              Discover Your Future
            </Text>
            <Text style={styles.subtitle}>
              Compare Universities, Institutes, and Scholarships in Cambodia
            </Text>
          </View>

          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <Ionicons name="search" size={20} color="gray" />
              <TextInput placeholder="Search University" style={styles.searchInput} />
            </View>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.filterRow}>
              {["All", "University", "Institute", "Public", "Private"].map((item) => (
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
          </ScrollView>

          <View style={styles.cardContainer}>
            <View style={styles.cardContainerHeader}>

              <View style={styles.cardHeader}>
                <Ionicons name="flame" size={18} color="orange" />
                <Text style={{ marginLeft: 5, fontWeight: "bold" }}>
                  Popular
                </Text>
              </View>

              <TouchableOpacity style={styles.cardHeader} onPress={() => navigation.navigate("Search")}>
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

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 15 }}>
              {universities.map((item) => (
                <View key={item.id} style={styles.card}>
                  <ImageBackground source={item.image} style={styles.imageBackground} imageStyle={{ borderRadius: 12 }}>
                    <View style={styles.cardButtonHeader}>

                      <View style={styles.badge}>
                        <Ionicons name="location" size={18} color="white" />
                        <Text style={styles.badgeText}>
                          {item.location}
                        </Text>

                      </View>

                      <View style={styles.favoriteButtonContainer}>
                        <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
                          <Ionicons name={favorites.includes(item.id) ? "heart" : "heart-outline"} size={18} color={"#DC2626"} />
                        </TouchableOpacity>
                      </View>
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
            </ScrollView>
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
    marginBottom: 10,
    paddingHorizontal: 20,

  },

  headerTitle: {
    flexDirection: "row",
    alignItems: "center"
  },

  appTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#007A6D",
    marginLeft: 10
  },

  title: {
    fontSize: 28,
    fontWeight: "500",
    color: "#007A6D",
  },

  subtitle: {
    color: "gray",
    // fontStyle: "italic",
    width: 280,
    fontSize: 12,
    marginTop: 5
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
    marginTop: 15,
  },

  filterChip: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginRight: 10,

    borderWidth: 1,
    borderColor: "#E5E7EB"
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
    width: 300,
    // marginRight: 20,
    // overflow: "hidden"
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

  cardButtonHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: 10,
    left: 10,
    right: 10
  },

  badge: {
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

  favoriteButtonContainer: {
    backgroundColor: "#FFF",
    padding: 5,
    borderRadius: 100
  },

  topRateContainer: {
    // backgroundColor: "red",
    marginTop: 20,
    borderRadius: 12,
    padding: 10
  },

  topRateTitleText: {
    fontWeight: 500,
    color: "#007A6D",
    fontSize: 28,
    marginBottom: 10
  },

  topRateCard: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center"
  },

  topRateImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: "gray",
    marginRight: 10
  },

  topRateTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});