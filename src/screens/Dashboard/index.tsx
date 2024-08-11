import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import Image from 'components/Image';
import Button from 'components/Button';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;
import {formatTimestamp} from 'utils/DateUtil';
import {ACTIVITIES, HORIZONTAL_PADDING_AROUND_SCREEN} from 'utils/Constants';



const DashboardScreen: React.FC = () => {
  return (
    <View style={styles.container}>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
          <SafeAreaView style={styles.mainSection}>
            <NotificationBar />
            <EmployeeSummary />
            <RecentActivities />
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          </SafeAreaView>
        </ScrollView>
    </View>
  );
};

const Header: React.FC = ()=>{
  return (
    <View style={styles.topSectionContainer}>
      <View style={styles.topSection}>
        <View style={styles.welcomeTextNameContainer}>
          <View><Text style={styles.welcomeTextSection}>Welcome,</Text></View>
          <View><Text style={styles.nameSection}>Jane Doe</Text></View>
        </View>
        <View style={styles.profilePicContainer}><Image url={'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'} style={styles.avatar} /></View>
      </View>
    </View>
  )
}

const NotificationBar: React.FC = ()=>{
  return (
    <View style={styles.notificationBarContainer}>
        <Text style={styles.notificationText} >You have 1 identity Verification!</Text>
        <Button style={{fontWeight: 'bold'}} title='Use Now' color='#0071c5'  backgroundColor='white' onPress={()=>{}}/>
    </View>
  )
}


const EmployeeSummary: React.FC = ()=>{
  const LeaveIcon = <FontAwesome name="medkit" size={18} color="#ff6600" />;
  const DollarIcon = <FontAwesome name="dollar" size={18} color="#03c04a" />;
  const AbsenceIcon = <FontAwesome name="calendar" size={18} color="#2b35AF" />;
  const LoanIcon = <FontAwesome name="bank" size={18} color="#ffa500" />;
  
  return (
    <View>
      <View style={styles.employeeSummaryTextContainer}>
        <Text style={styles.employeeSummaryText}>Employee Summary</Text>
      </View>
      <View style={styles.EmployeeSummaryCardContainer}>
        <Card icon={LeaveIcon} iconBackgroundColor="#ffcd90" cardLabel='Leave' cardDataColor="#ff6600" cardData="0"/>
        <Card icon={DollarIcon} iconBackgroundColor="#dcffdb" cardLabel='Salary' cardDataColor="#03c04a" cardData="1"/>
        <Card icon={AbsenceIcon} iconBackgroundColor="#b5c7eb" cardLabel='Absence' cardDataColor="#305cde" cardData="1"/>
        <Card icon={LoanIcon} iconBackgroundColor="#ffd3ac" cardLabel='Loan' cardDataColor="#ffa500" cardData="1"/>
      </View>
    </View>
  )
};

const Card: React.FC<any> = (props)=>{
  const {icon, iconBackgroundColor, cardLabel, cardDataColor, cardData} = props;
  const width = (SCREEN_WIDTH - (HORIZONTAL_PADDING_AROUND_SCREEN) * 2.5) / 2;
  return (
    <View style={[styles.card, {width}]}>
      <View style={styles.cardLeft}>
        <View style={[styles.iconContainer, {backgroundColor: iconBackgroundColor}]}>
          {icon}
        </View>
        <Text style={styles.cardLabelText} > {cardLabel} </Text>
      </View>
      <View style={styles.cardRight}>
        <Text style={[styles.cardData, {color: cardDataColor}]}>{cardData}</Text>
      </View>
    </View>
  )
}

const RecentActivities: React.FC = ()=>{
  return (
    <View>
      <View style={styles.recentActivityLabelContainer}>
        <Text style={styles.recentActivityLabel}>
          Recent Activity
        </Text>
        <Text style={styles.seeMoreLabel}>
          See more  
        </Text>
      </View>
      <View style={styles.activityCardContainer}>
        {
          ACTIVITIES.map((activity)=>{
            const {id, name, description, date} = activity;

            return (
              <View key={id} style={styles.activityCard}>
                <View style={styles.activityCardLeftSide}>
                  <View style={styles.activityIconContainer}>
                    <FontAwesome name="history" size={20} color='grey' />
                  </View>
                  <View style={styles.activityNameContainer}>
                    <Text style={{flex: 1, overflow: 'hidden',}} numberOfLines={1}>{name}</Text>
                    <Text style={{flex: 1, overflow: 'hidden', color: 'grey'}}  numberOfLines={1}>{description}</Text>
                  </View>
                </View>
                <View style={styles.activityCardRightSide}>
                  <Text style={styles.activityDate}>{formatTimestamp(date)}</Text>
                </View>
              </View>
            )
          })
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: HORIZONTAL_PADDING_AROUND_SCREEN,
    backgroundColor: 'white'
  },
  topSectionContainer: {
    height: 120,
    // backgroundColor: 'green',
  },
  topSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  welcomeTextNameContainer : {
  },
  welcomeTextSection : {
    fontSize: 24,
    color: '#708090' // slate gray
  },
  nameSection : {
    fontSize: 24,
    fontWeight: '600'
  },
  avatar : {
    width: 100,
    height: 100,
    borderRadius: 75,
    // marginBottom: 20,
  },
  mainSection: {
    flex: 1,
    marginTop: 30,
    gap: 30 // give gap b/w children of container
  },
  notificationBarContainer : {
    backgroundColor: '#0071c5',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  notificationText : {
    color: 'white',
    fontWeight: '700'
  },
  profilePicContainer : {

  },
  EmployeeSummaryCardContainer : {
    flexWrap:'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10 // this is to give gap b/w rows of container
  },
  employeeSummaryTextContainer : {
    marginBottom: 20
  },
  employeeSummaryText : {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#3d3d3d'
  },
  card : {
    paddingTop: 25,
    paddingBottom: 15,
    paddingHorizontal: 10,
    marginLeft:0,
    // marginVertical :10,
    backgroundColor: 'white',
    flexDirection:'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    borderRadius: 8,
    // Shadow for iOS
    shadowColor: 'lighgray',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 5,
  },
  iconContainer : {
    width: 35,
    height: 35,
    borderRadius: 40, // Half of the width/height to make it a circle
    // backgroundColor: 'orange', // Background color of the circle
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardLeft : {
    gap: 10,
    justifyContent: 'space-between'
  },
  cardRight : {},
  cardLabelText : {
    color: '#A9A9A9',
    fontWeight: '700'
  },
  cardData : {
    fontSize: 22,
    fontWeight: '600'
  },
  recentActivityLabelContainer : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  recentActivityLabel : {
    fontWeight: '600',
    fontSize: 18
  },
  seeMoreLabel : {
    color: '#666666'
  },
  activityCardContainer : {
    gap: 20
  },
  activityCard : {
    height: 50,
    // backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    // backgroundColor: 'grey'
  },
  activityCardLeftSide : {
    justifyContent: 'space-between',
    flexDirection: 'row',
    // backgroundColor: 'orange',
    flex: 8,
  },
  activityCardRightSide : {
    flex: 4,
    // backgroundColor:'yellow',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  activityIconContainer : {
    // backgroundColor: 'blue',
    marginRight: 5,
    justifyContent: 'center',
    flex: 1,
  },
  activityNameContainer : {
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    // width:'90%'
    flex:11
  },
  activityDate: {
    fontWeight: '600'
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default DashboardScreen;
