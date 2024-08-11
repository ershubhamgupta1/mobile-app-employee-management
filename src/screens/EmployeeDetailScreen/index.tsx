import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Image from 'components/Image';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {HORIZONTAL_PADDING_AROUND_SCREEN} from 'utils/Constants';


const EmployeeDetailScreen: React.FC = () => {
  return (
    <View style={styles.container}>
        <View style={styles.profilePicContainer}>
            <Image url={'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'} style={styles.avatar} />
        </View>
        <View style={styles.profileBrief}>
            <View style={styles.nameConatiner}>
                <Text style={styles.name}>Jane Joe</Text>
            </View>
            <View style={styles.employeeDetail}>
                <View style={[styles.detailItem]}>
                    <FontAwesome name="circle" size={6} color="grey" />
                    <Text style={styles.detailItemLabel}>Part Time111</Text>
                </View>
                <View style={[styles.detailItem]}>
                    <FontAwesome name="circle" size={6} color="grey" />
                    <Text style={styles.detailItemLabel}>UI/UX Designer</Text>
                </View>
                <View style={[styles.detailItem]}>
                    <FontAwesome name="circle" size={6} color="grey" />
                    <Text style={styles.detailItemLabel}>Joined 2023</Text>
                </View>
            </View>
            <View style={styles.employeeInfo}>
                <View style={[styles.detailItem]}>
                    <Text style={styles.detailItemLabel}>
                        <Text style={styles.employeeInfoLabel}>Emp. ID : 1132304</Text> 
                    </Text>
                </View>
                <View style={[styles.detailItem]}>
                    <Text style={styles.detailItemLabel}>
                        <Text style={styles.employeeInfoLabel}>Cur. Project : Lennar</Text> 
                    </Text>
                </View>
            </View>
        </View>
        <View style={styles.employeeExtraTileContainer}>
            <View style={styles.employeeExtraTile}>
                <View style={styles.employeeExtraTileLeftSide}>
                    <FontAwesome name="bank" size={18} color="#black" />
                    <Text>Personal Info</Text>
                </View>
                <View style={styles.employeeExtraTileRightSide}>
                    <FontAwesome name="chevron-right" size={18} color="grey" />
                </View>
            </View>
            <View style={styles.employeeExtraTile}>
                <View style={styles.employeeExtraTileLeftSide}>
                    <FontAwesome name="bank" size={18} color="#black" />
                    <Text>Official Info</Text>
                </View>
                <View style={styles.employeeExtraTileRightSide}>
                    <FontAwesome name="chevron-right" size={18} color="grey" />
                </View>
            </View>
            <View style={styles.employeeExtraTile}>
                <View style={styles.employeeExtraTileLeftSide}>
                    <FontAwesome name="bank" size={18} color="#black" />
                    <Text>Financial Info</Text>
                </View>
                <View style={styles.employeeExtraTileRightSide}>
                    <FontAwesome name="chevron-right" size={18} color="grey" />
                </View>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: HORIZONTAL_PADDING_AROUND_SCREEN
  },
  profilePicContainer : {
    alignItems: 'center',
    paddingTop: 20,
    marginBottom: -60,
    zIndex: 3,
  },
  avatar : {
    width: 120,
    height: 120,
    borderRadius: 75,
    // marginBottom: 20,
  },
  profileBrief : {
    backgroundColor: 'rgba(202, 219, 249, .5)',
    zIndex: 2,
    paddingTop: 80,
    paddingHorizontal: 15

  },
  name : {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18
  },
  nameConatiner : {
    justifyContent:'center',
    alignItems: 'center'
  },
  employeeDetail : {
    flexDirection: 'row',
    fontSize: 16,
    justifyContent: 'space-around',
    paddingVertical: 20,
    // backgroundColor: 'green',
  },
  detailItem: {
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
    flexDirection: 'row'
  },
  detailItemLabel: {
    paddingLeft: 6,
    fontWeight:'300'
  },
  employeeInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 20,
    gap: 5,
    justifyContent: 'space-around'
  },
  employeeInfoLabel: {
    fontWeight: '600'
  },
  employeeExtraTileContainer: {
    paddingTop: 30,
    gap: 20
  },
  employeeExtraTile : {
    height: 60,
    borderWidth: 1,            // Set the width of the border
    borderColor: 'lightgrey',      // Set the color of the border
    borderRadius: 5,           // backgroundColor: 'orange',
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  employeeExtraTileLeftSide: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'green',
    gap:10
  },
  employeeExtraTileRightSide: {
    height: '100%',
    justifyContent: 'center',
    // backgroundColor: 'black',
    paddingRight: 10
  }
});

export default EmployeeDetailScreen;
