// This page is only for testing purposes.
// I made this so I can try and use the camera button and its functionalities
// Also, I lowkey dont know how to run the page without an extra folder.

import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Palette } from '@/constants/palette';

export default function TestPage() {
    return (
        <View style={styles.container}>
          <View style={styles.iconWrap}>
            <Ionicons name="qr-code" size={64} color={Palette.primary} />
              </View>

               <Text style={styles.title}>Smart QR Attendance</Text>
              <Text style={styles.subtitle}>
            Scan your class QR code and record your attendance in seconds.
         </Text>
          
            <Link href="/screens/scan" style={styles.link}>
                Scan
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 28,
    backgroundColor: Palette.navy,
  },
  iconWrap: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: Palette.navyLight,
    borderWidth: 2,
    borderColor: Palette.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: '#94A3B8',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 40,
    maxWidth: 320,
  },
  link: {
    backgroundColor: Palette.primary,
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 14,
    overflow: 'hidden',
  },
});