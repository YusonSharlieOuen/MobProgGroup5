// A QR Scanner, uses the camera to scan QR codes

import { CameraView, useCameraPermissions } from 'expo-camera';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
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

            <Button
                title="Allow Camera"
                onPress={requestPermission}
            />
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

        <View style={styles.instructionContainer}>
            <Text style={styles.instruction}>
                Scan the attendance QR code
            </Text>
        </View>
    </View>
    );
    
}

const styles = StyleSheet.create({
    scannerContainer: {
        flex: 1,
    },

    camera: {
        flex: 1,
    },

    instructionContainer: {
        position: 'absolute',
        bottom: 40,
        left: 20,
        right: 20,
        alignItems: 'center',
    },

    instruction: {
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        color: '#FFFFFF',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        fontSize: 14,
        fontWeight: '600',
    },

    messageContainer: {
        padding: 20,
    },
});