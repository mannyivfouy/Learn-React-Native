import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function LoginScreen() {
  return (
    <View style={style.container}>
      <Text style={style.title}>Login</Text>
      <Text style={style.subtitle}>Welcome Back!</Text>

      <TextInput placeholder="Email" style={style.input}></TextInput>
      <TextInput placeholder="Password" style={style.input}></TextInput>

      <TouchableOpacity style={style.button}>
        <Text style={style.buttonText}> Login </Text>
      </TouchableOpacity>

      <Text style={style.link}>
        Don't have an account? Sign up
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff"
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5
  },

  subtitle: {
    marginBottom: 30,
    color: "gray"
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15
  },

  button: {
    backgroundColor: "#4F46E5",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  },

  link: {
    marginTop: 20,
    textAlign: "center",
    color: "#4F46E5"
  }
})