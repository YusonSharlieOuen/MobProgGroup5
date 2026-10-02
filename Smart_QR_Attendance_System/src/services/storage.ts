import AsyncStorage from '@react-native-async-storage/async-storage';

const HISTORY_KEY = 'attendance_history';

export type AttendanceRecord = {
  id: string;
  studentName: string;
  status: string;
  time: string;
  date: string;
};

export async function getAttendanceHistory(): Promise<AttendanceRecord[]> {
  const json = await AsyncStorage.getItem(HISTORY_KEY);
  return json ? JSON.parse(json) : [];
}

export async function saveAttendanceRecord(newRecord: AttendanceRecord) {
  const history = await getAttendanceHistory();
  history.unshift(newRecord); // newest first
  await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}