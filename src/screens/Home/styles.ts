import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 32,
    marginBottom: 32,
    gap: 16,
  },
  input: {
    height: 56,
    backgroundColor: "#1f1e25",
    color: "#FFF",
    fontSize: 18,
    padding: 16,
    borderRadius: 8,
    flex: 1,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: "#0080ff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 24,
    color: "#FFF",
  },
  emptyListText: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
    marginTop: 48,
  },
});
