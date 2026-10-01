// This page is only for testing purposes.
// I made this so I can try and use the camera button and its functionalities
// Also, I lowkey dont know how to run the page without an extra folder.

import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function TestPage() {
    return (
        <View style={styles.container}>

            <Link href="/screens/scan" style={styles.link}>
                Scan
            </Link>

        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
    marginBottom: 5,
  },
  link: {
    textAlign: 'center',
    color: '#007AFF',
    fontSize: 16,
  },
});