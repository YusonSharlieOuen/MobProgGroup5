import { Stack } from 'expo-router';
import { Palette } from '@/constants/palette';

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
    </Stack>
  );
}