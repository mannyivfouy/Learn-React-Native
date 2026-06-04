import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

export default function SignupScreen() {
  return (
    <View style={style.container}>
      <Text style={style.title}>Create Account</Text>
      <Text style={style.subtitle}>Sign Up To Get Start</Text>

      <TextInput placeholder="Fullname" style={style.input}></TextInput>

      <TextInput placeholder="Email" style={style.input}></TextInput>
      <TextInput placeholder="Password" style={style.input}></TextInput>

      <TouchableOpacity style={style.button}>
        <Text style={style.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={style.link}>
        Already have an account? Sign In
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

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
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