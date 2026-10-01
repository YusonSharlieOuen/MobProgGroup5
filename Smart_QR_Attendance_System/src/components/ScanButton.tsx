// Scan Button

import { Pressable, Text } from 'react-native';

type ScanButtonProps = {
    onPress: () => void;
};

export default function ScanButton({ onPress }: ScanButtonProps) {
    return (
        <Pressable onPress={onPress}>
            <Text>Scan QR Code</Text>
        </Pressable>
    );
}