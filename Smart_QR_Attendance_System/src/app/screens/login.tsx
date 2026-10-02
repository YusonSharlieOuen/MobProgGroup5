import {useState} from 'react';
import {
    View,
    Text, 
    TextInput,
    Pressable, 
    StyleSheet,
} from 'react-native';
import {router} from 'expo-router';

export default function LoginScreen () {
    const [studentId, setStudentId] = useState ('');
    const [password, setPassword] = useState ('');

    function handleLogin() {
        if (studentId === '' || password === ''){
            return;
        }

        if(studentId === 'student' && password === '1234'){
            router.replace('/screens/dashboard');
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
});
