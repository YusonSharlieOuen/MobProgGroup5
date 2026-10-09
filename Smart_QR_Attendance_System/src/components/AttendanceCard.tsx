import { View, Text, StyleSheet } from 'react-native';
import { createElement } from 'react';


type Props = {
  studentName: string;
  status: string;
  time: string;
  date: string;
};

export function AttendanceCard({ studentName, status, time, date }: Props) {
    const isPresent = status.toLowerCase() === 'present';
  return createElement(
    View,
    { style: styles.card },
    createElement(
      View,
      { style: styles.row },
      createElement(Text, { style: styles.name }, studentName),
      createElement(
    Text,
    {
    style: [
      styles.status,
      isPresent ? styles.present : styles.otherStatus,
    ],
  },
  status,
),
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

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

    name: {
      fontSize: 17,
      fontWeight: '700',
      color: '#0F172A',
      flex: 1,
      marginRight: 10,
    },

    status: {
      fontSize: 12,
      fontWeight: '700',
      paddingVertical: 4,
      paddingHorizontal: 12,
      borderRadius: 20,
      overflow: 'hidden',
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },

    present: {
      color: '#15803D',
      backgroundColor: '#DCFCE7',
    },

    otherStatus: {
      color: '#B45309',
      backgroundColor: '#FEF3C7',
    },

    time: {
      marginTop: 6,
      fontSize: 13,
      color: '#64748B',
    },
  });
