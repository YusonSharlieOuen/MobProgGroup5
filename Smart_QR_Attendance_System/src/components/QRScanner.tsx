// A QR Scanner, uses the camera to scan QR codes

import { Palette } from '@/constants/palette';
import { CameraView, useCameraPermissions } from 'expo-camera';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import StatusMessage from './StatusMessage';


type QRScannerProps = {
    onScan: (data: string) => void;
};

export default function QRScanner({ onScan }: QRScannerProps) {
    const [permission, requestPermission] = useCameraPermissions();
    const [scanned, setScanned] = useState(false);

    if (!permission) {
    return (
        <View style={styles.messageContainer}>
            <StatusMessage
                type="info"
                message="Checking camera permission..."
            />
        </View>
    );
}

    if (!permission.granted) {
    return (
        <View style={styles.messageContainer}>
            <StatusMessage
                type="warning"
                message="Camera permission is required."
            />

            <Pressable
                style={({ pressed }) => [styles.allowButton, pressed && styles.pressed]}
                onPress={requestPermission}
            >
                <Text style={styles.allowText}>Allow Camera</Text>
            </Pressable>
        </View>
    );
}

    return (
    <View style={styles.scannerContainer}>
        <CameraView
            style={styles.camera}
            barcodeScannerSettings={{
                barcodeTypes: ['qr'],
            }}
            onBarcodeScanned={({ data }) => {
                if (scanned) {
                    return;
                }

                setScanned(true);
                onScan(data);
            }}
        />

        <View style={styles.overlay} pointerEvents="none">
            <View style={styles.frame}>
                <View style={[styles.corner, styles.topLeft]} />
                <View style={[styles.corner, styles.topRight]} />
                <View style={[styles.corner, styles.bottomLeft]} />
                <View style={[styles.corner, styles.bottomRight]} />
            </View>
        </View>

        <View style={styles.instructionContainer}>
            <Text style={styles.instruction}>
                Scan the attendance QR code
            </Text>
        </View>
    </View>
    );
    
}

const CORNER = 44;
const THICK = 5;

const styles = StyleSheet.create({
    scannerContainer: {
        flex: 1,
        backgroundColor: '#000000',
    },

    camera: {
        flex: 1,
    },

    overlay: {
        ...StyleSheet.absoluteFill,
        alignItems: 'center',
        justifyContent: 'center',
    },

    frame: {
        width: 250,
        height: 250,
    },

    corner: {
        position: 'absolute',
        width: CORNER,
        height: CORNER,
        borderColor: Palette.primary,
    },
    topLeft: {
        top: 0,
        left: 0,
        borderTopWidth: THICK,
        borderLeftWidth: THICK,
        borderTopLeftRadius: 20,
    },
    topRight: {
        top: 0,
        right: 0,
        borderTopWidth: THICK,
        borderRightWidth: THICK,
        borderTopRightRadius: 20,
    },
    bottomLeft: {
        bottom: 0,
        left: 0,
        borderBottomWidth: THICK,
        borderLeftWidth: THICK,
        borderBottomLeftRadius: 20,
    },
    bottomRight: {
        bottom: 0,
        right: 0,
        borderBottomWidth: THICK,
        borderRightWidth: THICK,
        borderBottomRightRadius: 20,
    },

    instructionContainer: {
        position: 'absolute',
        bottom: 40,
        left: 20,
        right: 20,
        alignItems: 'center',
    },

    instruction: {
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        color: '#FFFFFF',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 24,
        overflow: 'hidden',
        fontSize: 14,
        fontWeight: '600',
    },

    messageContainer: {
        padding: 20,
    },

    allowButton: {
        backgroundColor: Palette.primary,
        paddingVertical: 14,
        borderRadius: 14,
        alignItems: 'center',
        marginTop: 8,
    },
    allowText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
    },
    pressed: {
        opacity: 0.8,
    },
});