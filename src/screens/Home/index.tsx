import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { AttendantProps, Participant } from "../../components/Participant";
import { v4 as uuidV4 } from "uuid";

export function Home() {
  const [attendants, setAttendants] = useState<AttendantProps[]>([
    {
      name: "João",
      uuid: uuidV4(),
    },
  ]);

  const [attendantName, setAttendantName] = useState("");

  const handleAddAttendant = () => {
    if (
      attendants.some((attendant) => attendant.name === attendantName.trim())
    ) {
      return Alert.alert(
        "Participante existe",
        "Esse participante já está cadastrado"
      );
    }

    setAttendants([
      ...attendants,
      {
        name: attendantName.trim(),
        uuid: uuidV4(),
      },
    ]);
    setAttendantName("");
  };

  const handleRemoveAttendant = (attendantToRemoveUUID: string) => {
    const attendant = attendants.find(
      (attendant) => attendant.uuid === attendantToRemoveUUID
    );

    return Alert.alert(
      "Remover participante",
      `Remover participante (${attendant?.name}) do evento?`,
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            setAttendants(
              attendants.filter(
                (attendant) => attendant.uuid !== attendantToRemoveUUID
              )
            );
            Alert.alert("Sucesso", "Participante removido");
          },
          style: "destructive",
          isPreferred: true,
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Segunda, 27 de novembro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          value={attendantName}
          onChangeText={setAttendantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddAttendant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={attendants}
        keyExtractor={(item) => item.uuid}
        renderItem={({ item }) => (
          <Participant
            attendant={item}
            handleRemoveAttendant={() => handleRemoveAttendant(item.uuid)}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyListText}>
            Nenhum participante cadastrado. Adicione um participante.
          </Text>
        }
      />
    </View>
  );
}
