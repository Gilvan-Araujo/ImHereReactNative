import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1f1e25",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  name: {
    color: "#fff",
    flex: 1,
    fontSize: 16,
    margin: 16,
  },
  button: {
    width: 56,
    height: 56,
    padding: 10,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: "#ff0080",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 24,
    color: "#FFF",
  },
});
