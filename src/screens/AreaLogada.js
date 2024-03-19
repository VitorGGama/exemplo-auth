import { Button, StyleSheet, Text, View } from "react-native";

import { auth } from "../../firebase.config";
import { signOut } from "firebase/auth";

export default function AreaLogada({ navigation }) {
  //Acessando dados do usuário logado
  console.log(auth.currentUser);

  const { email, displayName } = auth.currentUser;
  console.log(email);

  const logout = async () => {
    try {
      await signOut(auth);
      navigation.replace("Inicial");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={estilos.container}>
      <View style={estilos.topo}>
        <Text style={estilos.bemVindo}>Bem-vindo(a):</Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            color: "blue",
            textTransform: "uppercase",
          }}
        >
          {displayName}
        </Text>

        <Button onPress={logout} title="Logout" color="#D35400" />
      </View>
      <View style={estilos.geral}>
        <Text>Você está na área logada.</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF3CF",
    padding: 16,
  },
  topo: {
    marginVertical: 32,
  },
  bemVindo: {
    fontSize: 24,
    marginVertical: 16,
  },
});
