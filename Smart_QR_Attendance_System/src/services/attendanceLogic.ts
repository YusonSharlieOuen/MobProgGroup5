import { AttendanceRecord, getAttendanceHistory, saveAttendanceRecord } from './storage';

export async function processAttendanceScan(scannedData: string): {
  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const currentTime = new Date().toLocaleTimeString();

  if (!scannedData || scannedData.trim() === '') {
    return {
      id: Date.now().toString(),
      studentName: 'Invalid QR',
      status: 'Invalid',
      time: currentTime,
      date: currentDate,
    };
  }

  const history = await getAttendanceHistory();

  const alreadyScanned = history.some(
    (item) => item.studentName === scannedData && item.date === currentDate
  );

  const status = alreadyScanned ? 'Duplicate' : 'Present';

  const newRecord: AttendanceRecord = {
    id: Date.now().toString(),
    studentName: scannedData,
    status: status,
    time: currentTime,
    date: currentDate,
  };

  await saveAttendanceRecord(newRecord);

  return newRecord;
}