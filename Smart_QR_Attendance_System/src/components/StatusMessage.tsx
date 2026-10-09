import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { Palette } from '@/constants/palette';
import React from 'react';


type StatusMessageProps = {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
};

    const CONFIG = {
      success: { icon: 'checkmark-circle', color: Palette.success, bg: Palette.successBg },
      error: { icon: 'close-circle', color: Palette.error, bg: Palette.errorBg },
      warning: { icon: 'warning', color: Palette.warning, bg: Palette.warningBg },
      info: { icon: 'information-circle', color: Palette.info, bg: Palette.infoBg },
    } as const;

export default function StatusMessage({
  message, 
  type = 'info',
  }: StatusMessageProps) {
    const { icon, color, bg } = CONFIG[type];

  return (
    <View style={[styles.container, { backgroundColor: bg, borderLeftColor: color }]}>
      <Ionicons name={icon} size={24} color={color} />
      <Text style={[styles.text, { color }]}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 14,
    borderRadius: 12,
    borderLeftWidth: 5,
    marginVertical: 8,
  },

  text: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
  },
});