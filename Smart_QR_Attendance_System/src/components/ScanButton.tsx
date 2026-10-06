// Scan Button

import { Pressable, Text, Stylesheet } from 'react-native';

type ScanButtonProps = {
    onPress: () => void;
};

export default function ScanButton({ onPress }: ScanButtonProps) {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.button,
                pressed && styles.pressed,
            ]}
            onPress={onPress}
        >
            <Text style={styles.text}>Scan QR Code</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1B7F4B',
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },

    pressed: {
        opacity: 0.7,
    },

    text: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});