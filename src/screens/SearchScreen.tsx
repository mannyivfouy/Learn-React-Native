import { Text, View, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SearchScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#CDECE7" }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <Text>
            Search
          </Text>
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
    // backgroundColor: '#CDECE7',
    padding: 20,
  },
})