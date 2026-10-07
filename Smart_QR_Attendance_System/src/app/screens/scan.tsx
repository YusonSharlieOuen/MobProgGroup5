import React, { useState } from 'react';
import { Text, View } from 'react-native';

import QRScanner from '@/components/QRScanner';
import ScanButton from '@/components/ScanButton';

export default function ScanScreen() {
    const [scanning, setScanning] = useState(false);
    const [result, setResult] = useState('');

    function handleScan(data: string) {
        setResult(data);
        setScanning(false);
    }

    return (
        <View style={{ flex:1 }}>
            {!scanning && (
                <>
                    <Text>Qr Scanner</Text>

                    <ScanButton
                        onPress={() => setScanning(true)}
                    />

                    <Text>
                        Scanned: {result}
                    </Text>
                </>
            )}

            {scanning && (
                <QRScanner onScan={handleScan} />
            )}

        </View>
    )
}