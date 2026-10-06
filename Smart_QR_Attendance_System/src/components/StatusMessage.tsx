import { View, Text, StyleSheet } from 'react-native';

type StatusMessageProps = {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
};

export default function StatusMessage({
  message, 
  type = 'info',
}: StatusMessageProps) {
  return (
    <View style={[styles.container, styles[type]]}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },

  text: {
    fontSize: 14,
    fontWeight: '600',
  },

  success: {
    backgroundColor: '#E8F5E9',
  },

  error: {
    backgroundColor: '#FFEBEE',
  },

  warning: {
    backgroundColor: '#FFF8E1',
  },

  info: {
    backgroundColor: '#E3F2FD',
  },
});