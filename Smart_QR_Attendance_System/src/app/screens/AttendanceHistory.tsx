import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from 'expo-router';
import { AttendanceCard } from '@/components/AttendanceCard';
import { getAttendanceHistory, AttendanceRecord } from '@/services/storage';
import { Palette } from '@/constants/palette';

export default function HistoryScreen() {
  const [attendanceList, setAttendanceList] = useState<AttendanceRecord[]>([]);

  useFocusEffect(
    useCallback(() => {
      getAttendanceHistory().then(setAttendanceList);
    }, []),
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={attendanceList}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <AttendanceCard studentName={item.studentName} status={item.status} time={item.time} date={item.date} />
        )}
        ListEmptyComponent={
          <View style={styles.emptyWrap}>
            <View style={styles.emptyIcon}>
              <Ionicons name="calendar-outline" size={40} color={Palette.textMuted} />
            </View>
            <Text style={styles.empty}>No attendance records found</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: Palette.bg },
  list: { paddingBottom: 24, gap: 12 },
  emptyWrap: { alignItems: 'center', marginTop: 80 },
  emptyIcon: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: Palette.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  empty: { textAlign: 'center', color: Palette.textMuted, fontSize: 15, fontWeight: '600' },
});
