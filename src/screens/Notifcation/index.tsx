import React from "react";
import { VirtualizedList, View, Text, StyleSheet, ListRenderItem } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {formatTimestamp} from 'utils/DateUtil';
import {NOTIFICATIONS} from 'utils/Constants';

interface NotifcationData {
    id: number;
    name: string;
    description: string;
    date: string
}

interface RenderNotificationProps {
    id: number;
    name: string;
    description: string;
    date: string;
}

const HORIZONTAL_PADDING_AROUND_SCREEN = 25;
const notifications:NotifcationData[] = NOTIFICATIONS;
  
  const getItem = (data: NotifcationData[], index: number): NotifcationData => data[index];

  const getItemCount = (data: NotifcationData[]): number => data.length;
  
  
  
const RenderNotification:React.FC<RenderNotificationProps> = ({ id, name, description, date }) => (
    <View key={id} style={styles.cardContainer}>
      <View  style={styles.cardIconContainer}>
        <FontAwesome name="history" size={20} color='grey' />
      </View>
      <View style={styles.cardMainSection}>
        <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderTitle} numberOfLines={1}>{name}</Text>
            <View style={styles.cardHeaderDateContainer}>
                <Text style={styles.cardHeaderDate}>{formatTimestamp(date)}</Text>
            </View>
        </View>  
        <View>
            <Text style={styles.cardDescContainer}>{description}</Text>
        </View>
      </View>
  </View>
);


const Notification:React.FC = ()=>{
    const renderItem: ListRenderItem<NotifcationData> = (props) => {
        const { item } = props;
        return <RenderNotification id={item.id} name={item.name} description={item.description} date={item.date} />;
      };
    return (
        <View style={{backgroundColor: 'white', flex:1, paddingVertical: 20}}>
            <VirtualizedList
            data={notifications}
            initialNumToRender={10} // Number of items to render initially
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            getItemCount={getItemCount}
            getItem={getItem}
            ItemSeparatorComponent={() => <View style={{ height: 20, backgroundColor: 'white' }} />} // 10px gap
            />
        </View>
    )
} 

const styles = StyleSheet.create({
    container : {
        flex: 1,
        paddingHorizontal: HORIZONTAL_PADDING_AROUND_SCREEN,
        backgroundColor: 'white'
    },
    activityCard : {
        // height: 100,
        // backgroundColor: 'orange',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        // backgroundColor: 'white'
    },
    cardIconContainer : {
        // backgroundColor: 'blue',
        marginRight: 5,
        paddingHorizontal: 10,
        justifyContent: 'center',
        // flex: 1,
    },
    cardContainer : {
        flexDirection: 'row'
    },
    cardMainSection : {
        flex: 1
    },
    cardHeader : {
        flexDirection: 'row',
        flex: 1,
    },
    cardHeaderTitle : {
        flex: 8,
        overflow: 'hidden', 
        paddingVertical: 10,
        fontWeight: 'bold',
        color: '#353e43'
    },
    cardHeaderDateContainer : {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'flex-end'

    },
    cardHeaderDate : {
        paddingRight: 10,
        color: 'grey'
    },
    cardDescContainer : {
        flex: 1,  
        paddingRight:20, 
        lineHeight:20, 
        color: 'grey'
    }
})

  
  

export default Notification;


