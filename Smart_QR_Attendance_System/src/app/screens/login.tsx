import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function LoginScreen () {
    const [studentId, setStudentId] = useState ('');
    const [password, setPassword] = useState ('');
    const [error, setError] = useState ('');

    function handleLogin() {
        if (studentId === '' || password === ''){
            setError('Please enter your Student ID and password.');
            return;
        }

        if(studentId === '202212345' && password === '1234'){
            setError('');
            router.replace('/screens/dashboard');
    } else {
        setError('Invalid Student ID and password.');
    }
}

return (
    <View style={styles.container}>
        <Text style= {styles.title}>
            Smart QR Attendance
        </Text>

         <Text style={styles.subtitle}>
        Student Login
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Student ID"
        value={studentId}
        onChangeText={setStudentId}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Pressable
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>
          Login
        </Text>
      </Pressable>
      
      {error !== '' && (
    <Text style={styles.error}>
        {error}
    </Text>
    )}
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#ffffff',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 14,
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  error:{
    color: 'red',
    textAlign: 'center',
    marginTop: 12,
    fontWeight: 'bold',
  }
});
