import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { AttendanceCard } from '@/components/AttendanceCard';
import { getAttendanceHistory, AttendanceRecord } from '@/services/storage';

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
        renderItem={({ item }) => (
          <AttendanceCard studentName={item.studentName} status={item.status} time={item.time} date={item.date} />
        )}
        ListEmptyComponent={<Text style={styles.empty}>No attendance records found</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f4f5f7' },
  empty: { textAlign: 'center', marginTop: 40, color: '#777' },
});
