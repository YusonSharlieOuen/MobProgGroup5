import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
  },

    name: {
      fontSize: 16,
      fontWeight: 'bold',
    },

    status: {
      fontWeight: 'bold',
    },

    present: {
      color: '#1B7F4B',
    },

    otherStatus: {
      color: '#D97706',
    },

    time: {
      marginTop: 4,
      color: '#666',
    },
  });
