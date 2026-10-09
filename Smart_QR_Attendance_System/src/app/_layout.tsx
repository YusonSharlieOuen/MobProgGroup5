import { Palette } from '@/constants/palette';
import { Stack } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: Palette.navy },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: '700' },
        headerShadowVisible: false,
        contentStyle: { backgroundColor: Palette.bg },
      }}
      >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="/screens/testpage" options={{ title: 'Test Page' }} />
      <Stack.Screen name="/screens/scan" options={{ title: 'Scan' }} />
      <Stack.Screen name="/screens/AttendanceHistory" options={{ title: 'Attendance History' }} />
      <Stack.Screen name="/screens/dashboard" options={{ title: 'Dashboard' }} />
      <Stack.Screen name="/screens/login" options={{ title: 'Login' }} />
      <Stack.Screen name="/screens/AttendanceResult" options={{ title: 'Attendance Result' }} />
    </Stack>
  );
}