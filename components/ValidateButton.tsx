import { StyleSheet, Text, TouchableHighlight, View} from "react-native";
import * as React from "react";

export default function ValidateButton () {

  function sendConnexionRequest() {

  }

  return(
    <TouchableHighlight
      onPress={sendConnexionRequest}
      style={styles.button}
    >
      <View>
        <Text style={styles.text}>Valider</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: 'white',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#15534D",
    padding: 5,
    width: '60%',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 40,
    marginBottom: 20,
  }
});
