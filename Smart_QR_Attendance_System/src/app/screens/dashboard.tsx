import { View, Text, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function DashboardScreen() {

    function openScanner() {
        router.push('/screens/scan');
    }

    return (
        <View style= {styles.container}>

            <Text style={styles.title}>
                Smart QR Attendance
                </Text>
            
             <Text style={styles.welcome}>
                Welcome, Group 5!
                </Text>

            <Pressable
            style= {styles.scanButton}
            onPress={openScanner}
            >
                <Text style={styles.buttonText}>
                    Scan QR Code
                    </Text>
                </Pressable>

            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },

    title:{
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },

    welcome:{
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 25,
    },

    scanButton: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },

    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});