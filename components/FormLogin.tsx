import {StyleSheet, Text, TextInput, TouchableHighlight, View} from "react-native";
import * as React from "react";
import Logo from "./Logo";
import LoginInput from "./LoginInput";
import PasswordInput from "./PasswordInput";
import ValidateButton from "./ValidateButton";

export default function FormLogin () {
  let [loginValue, onChangeTextLogin] = React.useState('');
  let [passValue, onChangeTextPass] = React.useState('');

  function sendConnexionRequest() {
    const loginCall = fetch('http://146.59.156.251:3000/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: loginValue.toLowerCase(),
        password: passValue.toLowerCase()
      })
    }).then(res => res.json())
      .then(json => {
        return json.access_token;
      });

    if(loginCall !== null) {

    }
  }

  return(
    <View style={styles.container}>
      <Logo />
      {/*
      <LoginInput />
      <PasswordInput />
      <TouchableHighlight
        onPress={sendConnexionRequest}
        style={styles.button}
      >
        <View>
          <Text style={styles.text}>Valider</Text>
        </View>
      </TouchableHighlight>*/}
      <View style={styles.box}>
        <TextInput
          style={styles.formInput}
          onChangeText={login => onChangeTextLogin(login)}
          defaultValue={loginValue}
          placeholder={'Login'}
        />
      </View>
      <View style={styles.box}>
        <TextInput
          style={styles.formInput}
          onChangeText={password => onChangeTextPass(password)}
          value={passValue}
          placeholder={'Password'}
        />
      </View>
      <TouchableHighlight
        onPress={sendConnexionRequest}
        style={styles.button}
      >
        <View>
          <Text style={styles.text}>Valider</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  },
  formInput: {
    fontSize: 25,
    textAlign: "center"
  },
  box: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 30,
    padding: 5,
    width: '60%',
    marginVertical: 15,
  },
});
