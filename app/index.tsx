
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function Index() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-Vindo Mano</Text>

      <TextInput
        placeholder="Comprar Pão"
        placeholderTextColor={'#555'}
        style={styles.input}
      />

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 40,
        backgroundColor: '#001015',
    },
    title: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 25,
    },
    input: {
      backgroundColor: '#1F1E25',
      color: '#fff',
      fontSize: 18,
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
    },
    button: {
      backgroundColor: '#A37CF7',
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 17,
    }

})
