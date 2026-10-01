import { Stack } from 'expo-router';


export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen name="/screens/testpage" options={{ title: 'Test Page' }} />
      <Stack.Screen name="/screens/scan" options={{ title: 'Scan' }} />
    </Stack>
  );
}