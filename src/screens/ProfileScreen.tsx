import { Text, ScrollView, View, StyleSheet, Image, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#CDECE7" }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerTitle}>
              <Text style={styles.title}>
                Profile
              </Text>
            </View>

            <View style={styles.profileContainer}>
              <Image source={require('../../assets/meme.jpg')} style={styles.profileImage} />
            </View>
          </View>

          {/* Preference */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeaderText}>
              PREFERENCES
            </Text>

            <View style={styles.sectionCardContainer}>
              {/* Language */}
              <View style={styles.sectionItem}>
                <View style={[styles.iconContainer, { backgroundColor: "#DBEAFE" }]}>
                  <Ionicons name="language" size={22} color="#2563EB" />
                </View>

                <View style={styles.sectionContent}>
                  <Text style={styles.sectionTitle}>Language</Text>
                  <Text style={styles.sectionSubtitle}>App display language</Text>
                </View>

                <Text style={styles.sectionValue}>English</Text>

                <Ionicons name="chevron-forward" size={18} color="#999" />
              </View>

              <View style={styles.sectionDivider} />

              {/* Location */}
              <View style={styles.sectionItem}>
                <View style={[styles.iconContainer, { backgroundColor: "#DCFCE7" }]}>
                  <Ionicons name="location" size={22} color="#16A34A" />
                </View>

                <View style={styles.sectionContent}>
                  <Text style={styles.sectionTitle}>Default Province</Text>
                  <Text style={styles.sectionSubtitle}>Filter on app open</Text>
                </View>

                <Text style={styles.sectionValue}>Phnom Penh</Text>

                <Ionicons name="chevron-forward" size={18} color="#999" />
              </View>

              <View style={styles.sectionDivider} />

              {/* Notification */}
              <View style={styles.sectionItem}>
                <View style={[styles.iconContainer, { backgroundColor: "#FEE2E2" }]}>
                  <Ionicons name="notifications" size={22} color="#DC2626" />
                </View>

                <View style={styles.sectionContent}>
                  <Text style={styles.sectionTitle}>Notification</Text>
                  <Text style={styles.sectionSubtitle}>New university added</Text>
                </View>

                <View style={styles.sectionValue}>
                  <Switch />
                </View>
              </View>

              <View style={styles.sectionDivider} />

              {/* Dark Mode */}
              <View style={styles.sectionItem}>
                <View style={[styles.iconContainer, { backgroundColor: "#FEF3C7" }]}>
                  <Ionicons name="moon" size={22} color="#CA8A04" />
                </View>

                <View style={styles.sectionContent}>
                  <Text style={styles.sectionTitle}>Dark Mode</Text>
                </View>

                <View style={styles.sectionValue}>
                  <Switch />
                </View>
              </View>
            </View>
          </View>

          {/* Account */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeaderText}>
              ACCOUNT
            </Text>

            <View style={styles.sectionCardContainer}>
              {/* Account Info */}
              <View style={styles.sectionItem}>
                <View style={[styles.iconContainer, { backgroundColor: "#E0E7FF" }]}>
                  <Ionicons name="person" size={22} color="#4F46E5" />
                </View>

                <View style={styles.sectionContent}>
                  <Text style={styles.sectionTitle}>Account Info</Text>
                </View>

                <Ionicons name="chevron-forward" size={18} color="#999" />
              </View>

              <View style={styles.sectionDivider} />

              {/* Change Password */}
              <View style={styles.sectionItem}>
                <View style={[styles.iconContainer, { backgroundColor: "#FFE4E6" }]}>
                  <Ionicons name="lock-closed" size={22} color="#E11D48" />
                </View>

                <View style={styles.sectionContent}>
                  <Text style={styles.sectionTitle}>Change Password</Text>
                </View>

                <Ionicons name="chevron-forward" size={18} color="#999" />
              </View>
            </View>
          </View>

          {/* About */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeaderText}> 
              ABOUT
            </Text>

            <View style={styles.sectionCardContainer}>
              {/* About App */}
              <View style={styles.sectionItem}>
                <View style={[styles.iconContainer, { backgroundColor: "#E0F2FE" }]}>
                  <Ionicons name="information-circle" size={22} color="#0284C7" />
                </View>

                <View style={styles.sectionContent}>
                  <Text style={styles.sectionTitle}>Account Info</Text>
                </View>

                <Ionicons name="chevron-forward" size={18} color="#999" />
              </View>

              <View style={styles.sectionDivider} />

              {/* Privacy Policy */}
              <View style={styles.sectionItem}>
                <View style={[styles.iconContainer, { backgroundColor: "#F1F5F9" }]}>
                  <Ionicons name="shield-checkmark" size={22} color="#334155" />
                </View>

                <View style={styles.sectionContent}>
                  <Text style={styles.sectionTitle}>Privacy Policy</Text>
                </View>

                <Ionicons name="chevron-forward" size={18} color="#999" />
              </View>
            </View>
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
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#007A6D",
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
    overflow: "hidden",
  },

  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  // SECTION SYSTEM (NEW CLEAN NAMING)
  sectionContainer: {
    flexDirection: "column",
    marginBottom: 10,
  },

  sectionHeaderText: {
    color: "gray",
    marginBottom: 8,
  },

  sectionCardContainer: {
    backgroundColor: "#fff",
    overflow: "hidden",
    borderRadius: 12,    
  },

  sectionItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
  },

  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  sectionContent: {
    flex: 1,
    marginLeft: 12,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },

  sectionSubtitle: {
    fontSize: 13,
    color: "#888",
    marginTop: 2,
  },

  sectionValue: {
    fontSize: 14,
    color: "#666",
    marginRight: 6,
  },

  sectionDivider: {
    height: 1,
    backgroundColor: "#F0F0F0",
  },
});