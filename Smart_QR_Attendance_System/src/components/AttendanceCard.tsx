import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  studentName: string;
  status: string;
  time: string;
  date: string;
};

export function AttendanceCard({ studentName, status, time, date }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.name}>{studentName}</Text>
        <Text style={styles.status}>{status}</Text>
      </View>

      <Text style={styles.time}>
        {time} • {date}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#1B7F4B',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  status: {
    fontWeight: 'bold',
    color: '#1B7F4B',
  },

  time: {
    marginTop: 4,
    color: '#666',
    fontSize: 12,
  },
});
