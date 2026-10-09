// Scan Button
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { Palette, Shadow } from '@/constants/palette';


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
                <Ionicons name="qr-code-outline" size={22} color="#FFFFFF" />
            <Text style={styles.text}>Scan QR Code</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        backgroundColor: Palette.primary,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginVertical: 10,
        ...Shadow,
    },

    pressed: {
        opacity: 0.85,
        transform: [{ scale: 0.98 }],
    },

    text: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '700',
        letterSpacing: 0.3,
    },
});