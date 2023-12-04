import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export type AttendantProps = {
  name: string;
  uuid: string;
};

type AttendantCardProps = {
  attendant: AttendantProps;
  handleRemoveAttendant: (attendantToRemoveUUID: string) => void;
};

export function Participant({
  attendant,
  handleRemoveAttendant,
}: AttendantCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name} numberOfLines={1}>
        {attendant.name}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleRemoveAttendant(attendant.uuid)}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
