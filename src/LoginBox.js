import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const LoginBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <View style={styles.box}>
        <TextInput style={styles.user} placeholder="Username" />
        <TextInput style={styles.pass} placeholder="Password" />
        <Text style={{textAlign: 'center', marginTop: 20, color: '#fff'}}>
          Forgot Password ?
        </Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={{color : '#fff', fontWeight : 'bold'}}>Login</Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center', marginTop: 20, color: '#fff'}}>
          Create Account
        </Text>
      </View>
    </View>
  );
};

export default LoginBox;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 60,
  },
  box: {
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#fff',
  },
  user: {
    width: 260,
    paddingLeft: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#2f2e2e',
    backgroundColor: '#fff',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  pass: {
    width: 260,
    paddingLeft: 8,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  btn: {
    backgroundColor: 'black',
    marginTop: 30,
    height: 50,
    width: 200,
    borderRadius : 30,
    justifyContent : 'center',
    alignItems : 'center'
  },
});
