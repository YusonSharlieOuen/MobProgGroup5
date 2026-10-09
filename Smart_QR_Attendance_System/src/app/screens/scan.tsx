import ScanButton from '@/components/ScanButton';
import { processAttendanceScan } from '@/services/attendanceLogic';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import QRScanner from '@/components/QRScanner';
import { Palette, Shadow } from '@/constants/palette';


export default function ScanScreen() {
    const [scanning, setScanning] = useState(false);

    async function handleScan(data: string) {
        const attendance = await processAttendanceScan(data);

        setScanning(false);

        router.push({
            pathname: '/screens/AttendanceResult',
            params: {
                studentName: attendance.studentName,
                status: attendance.status,
                date: attendance.date,
                time: attendance.time,
            },
        });
    }

    return (
        <View style={{ flex:1 }}>
            {!scanning && (
                <>
                    <View style={styles.hero}>
                        <View style={styles.iconCircle}>
                            <Ionicons name="scan" size={48} color={Palette.primary} />
                        </View>
                            <Text style={styles.title}>QR Scanner</Text>
                        <Text style={styles.subtitle}>
                            Point your camera at the attendance QR code
                        </Text>
                    </View>

                    <ScanButton
                        onPress={() => setScanning(true)}
                    />
                </>
            )}

            {scanning && (
                <QRScanner onScan={handleScan} />
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: Palette.bg,
    },
    hero: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 24,
    },
    iconCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: Palette.navy,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 26,
        fontWeight: '800',
        color: Palette.text,
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 14,
        color: Palette.textMuted,
        textAlign: 'center',
    },
    resultCard: {
        backgroundColor: Palette.card,
        borderRadius: 16,
        padding: 18,
        marginTop: 16,
        borderLeftWidth: 5,
        borderLeftColor: Palette.primary,
        ...Shadow,
    },
    resultLabel: {
        fontSize: 12,
        fontWeight: '700',
        color: Palette.textMuted,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 6,
    },
    resultValue: {
        fontSize: 16,
        fontWeight: '600',
        color: Palette.text,
    },
});