import { View, Text, StyleSheet, ScrollView, SafeAreaView, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const ACTIVITIES = [
    {id: 1, name: 'Sick Leave sdgfsdf dfgfdgdf dfgfdgfd dfghdfgh dfgd', date: '2024-08-09', description: 'Leave approved by Rishab' },
    {id: 2, name: 'Salary Credited', date: '2024-08-08', description: 'Salary credited in your account!' },
    {id: 3, name: 'Absent', date: '2024-07-09', description: 'You are marked as absent' },
    {id: 4, name: 'AHD Acknowledged', date: '2023-08-09', description: 'Your AHD has been acknowledged' },
]


export const SCREEN_WIDTH = width < height ? width : height;
export const HORIZONTAL_PADDING_AROUND_SCREEN = 25;

  
export const NOTIFICATIONS = [
    {id: 1, name: 'Sick Leave sdgfsdf dfgfdgdf dfgfdgfd dfghdfgh dfgd', date: '2024-08-09', description: 'Leave approved by Rishab Leave approved by Rishab Leave approved by Rishab  Leave approved by Rishab' },
    {id: 2, name: 'Salary Credited', date: '2024-08-08', description: 'Salary credited in your account!' },
    {id: 3, name: 'Absent', date: '2024-07-09', description: 'You are marked as absent' },
    {id: 4, name: 'AHD Acknowledged', date: '2023-08-09', description: 'Your AHD has been acknowledged' },
  ]
