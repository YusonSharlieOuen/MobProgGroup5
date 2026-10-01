// A QR Scanner, uses the camera to scan QR codes

import { useState } from 'react';
import { View, Text, Button, } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

type QRScannerProps = {
    onScan: (data: string) => void;
};

export default function QRScanner({ onScan }: QRScannerProps) {
    const [permission, requestPermission] = useCameraPermissions();
    const [scanned, setScanned] = useState(false);

    if (!permission) {
        return <Text>Loading...</Text>;
    }

    if (!permission.granted) {
        return (
            <View>
                <Text>Camera permission is required.</Text>

                <Button
                title="Allow Camera"
                onPress={requestPermission}
            />
            </View>
        );
    }

    return (
        <CameraView
            style={{ flex: 1 }}
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
    );
}