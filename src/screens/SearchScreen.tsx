import { Text, View, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";

export default function SearchScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#CDECE7" }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerTitle}>
              <Ionicons name="school" size={30} color="#007A6D" />
              <Text style={styles.title}>
                UniFind
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 40
  },

  container: {
    backgroundColor: '#CDECE7',
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
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
})