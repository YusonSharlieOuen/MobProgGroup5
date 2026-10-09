import { Palette, Shadow } from '@/constants/palette';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function AttendanceResultScreen() {
    const {
        studentName,
        status,
        date,
        time,
    } = useLocalSearchParams<{
        studentName: string;
        status: string;
        date: string;
        time: string;
    }>();

    const isPresent = status === 'Present';

    return (
        <View style={styles.container}>
            <View style={styles.iconCircle}>
                <Ionicons
                    name={isPresent ? 'checkmark-circle' : 'alert-circle'}
                    size={60}
                    color={isPresent ? '#16A34A' : '#DC2626'}
                />
            </View>

            <Text style={styles.title}>
                {isPresent
                    ? 'Attendance Recorded!'
                    : status === 'Duplicate'
                    ? 'Already Recorded'
                    : 'Invalid QR Code'}
            </Text>

            <Text style={styles.subtitle}>
                {isPresent
                    ? 'Your attendance has been recorded successfully.'
                    : status === 'Duplicate'
                    ? 'Attendance has already been recorded today.'
                    : 'The scanned QR code is invalid.'}
            </Text>

            <View style={styles.resultCard}>
                <Text style={styles.label}>Student</Text>
                <Text style={styles.value}>
                    {studentName || 'Unknown'}
                </Text>

                <Text style={styles.label}>Status</Text>
                <Text style={styles.value}>{status || 'Unknown'}</Text>

                <Text style={styles.label}>Date</Text>
                <Text style={styles.value}>{date || 'Unknown'}</Text>

                <Text style={styles.label}>Time</Text>
                <Text style={styles.value}>{time || 'Unknown'}</Text>
            </View>

            <Pressable
                style={styles.button}
                onPress={() => router.back()}
            >
                <Text style={styles.buttonText}>
                    Scan Another QR Code
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
        backgroundColor: Palette.bg,
    },
    iconCircle: {
        alignSelf: 'center',
        marginBottom: 16,
    },
    title:{
        fontSize: 25,
        fontWeight: '800',
        color: Palette.text,
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: Palette.textMuted,
        textAlign: 'center',
        marginBottom: 24,
    },
    resultCard: {
        backgroundColor: Palette.card,
        borderRadius: 16,
        padding: 20,
        ...Shadow,
    },
    label: {
        fontSize: 12,
        fontWeight: '700',
        color: Palette.textMuted,
        marginTop: 12,
        marginBottom: 4,
    },
    value: {
        fontSize: 16,
        fontWeight: '600',
        color: Palette.text,
    },
    button: {
        backgroundColor: Palette.primary,
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 24,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
    },
});