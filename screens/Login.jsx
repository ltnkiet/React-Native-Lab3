import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


export default function Login() {
  const [isChecked, setChecked] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.title_1}>hello</Text>
        <Text style={styles.title_2}>again!</Text>
        <Text style={styles.title_3}>Welcome back you've been missed</Text>
      </View>
      <View style={styles.inputForm}>
        <View>
          <Text style={styles.inputTitle}>username</Text>
          <View style={styles.inputLabel}>
            <TextInput style={styles.inputText} />
          </View>
        </View>
        <View>
          <Text style={styles.inputTitle}>password</Text>
          <View style={styles.inputLabel}>
            <TextInput style={styles.inputText} />
          </View>
        </View>
      </View>
      <View style={styles.loginSelect}>
        <View style={styles.checkLabel}>
          <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#4630EB" : undefined}
          />
          <Text style={styles.rememberMe}>Remember me</Text>
        </View>
        <Text style={styles.forgotPw}>Forgot the password ?</Text>
      </View>
      <View style={styles.loginFooter}>
        <TouchableOpacity onPress={() => navigation.navigate("NavBottom")}>
          <View style={styles.loginButton}>
            <Text style={styles.loginText}>Login</Text>
          </View>
        </TouchableOpacity>
        <Text>or continue with</Text>
        <View style={styles.loginWithLabel}>
          <TouchableOpacity>
            <View style={styles.loginWith}>
              <AntDesign name="facebook-square" size={32} color="blue" />
              <Text style={styles.loginWithText}>Facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.loginWith}>
              <AntDesign name="google" size={32} color="violet" />
              <Text style={styles.loginWithText}>Google</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text>
            <Text>don't have an account ?</Text>
            <Text> Sign Up</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 20,
    paddingVertical: 50,
    backgroundColor: "#FFFFFF",
  },
  title: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 10,
  },
  title_1: {
    textTransform: "capitalize",
    fontSize: 30,
    fontWeight: "700",
  },
  title_2: {
    color: "blue",
    textTransform: "capitalize",
    fontSize: 30,
    fontWeight: "700",
  },
  title_3: {
    textTransform: "capitalize",
    fontSize: 20,
    flexWrap: "wrap",
  },
  inputForm: {
    marginTop: 40,
    gap: 20,
  },
  inputTitle: {
    textTransform: "capitalize",
  },
  inputLabel: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    marginTop: 8,
    height: 45,
  },
  inputText: {
    height: "100%",
    fontSize: 18,
  },
  loginSelect: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkLabel: {
    flexDirection: "row",
    gap: 4,
  },
  forgotPw: {
    color: "blue",
  },
  loginFooter: {
    display: "flex",
    gap: 20,
    marginTop: 30,
    alignItems: "center"
  },
  loginButton: {
    backgroundColor: "#1877F2",
    width: 350,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  loginText: {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
  },
  loginWithLabel: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  loginWith: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    backgroundColor: "#EEF1F4",
    height: 50,
    borderRadius: 4,
    width: 170,
    paddingHorizontal: 20,
  },
  loginWithText: {
    color: "#667080",
    fontWeight: "600",
    fontSize: 18,
  },
});
