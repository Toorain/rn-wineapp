import {StyleSheet, TextInput, View} from "react-native";
import * as React from "react";

export default function PasswordInput () {
  const [value, onChangeText] = React.useState('');

  return(
    <View style={styles.box}>
      <TextInput
        style={styles.formInput}
        onChangeText={password => onChangeText(password)}
        value={value}
        placeholder={'Password'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  formInput: {
    fontSize: 25,
    textAlign: 'center'
  },
  box: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 30,
    padding: 5,
    width: '60%',
    marginVertical: 15
  }
});
