import { View, Text, StyleSheet } from 'react-native';
import { createElement } from 'react';

type Props = {
  studentName: string;
  status: string;
  time: string;
  date: string;
};

export function AttendanceCard({ studentName, status, time, date }: Props) {
  return createElement(
    View,
    { style: styles.card },
    createElement(
      View,
      { style: styles.row },
      createElement(Text, { style: styles.name }, studentName),
      createElement(Text, { style: styles.status }, status),
    ),
    createElement(Text, { style: styles.time }, `${date} at ${time}`),
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
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  name: { fontSize: 16, fontWeight: 'bold' },
  status: { fontWeight: 'bold', color: '#1B7F4B' },
  time: { marginTop: 4, color: '#666' },
});
