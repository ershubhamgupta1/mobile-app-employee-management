import React from "react";
import { Button, View, StyleSheet, StyleProp, ViewStyle, TextStyle, TouchableOpacity, Text } from "react-native";

interface ButtonProps {
    title: string;
    onPress: ()=> void;
    color?: string;
    disabled?: boolean;
    backgroundColor: string;
    style?: StyleProp<TextStyle>;
}

const ButtonComp: React.FC<ButtonProps> = (props)=>{
    const {onPress, title, color, backgroundColor, style, disabled} = props;
    return (
        <TouchableOpacity disabled={disabled} style={[styles.container, {backgroundColor}]} onPress={() => console.log('Button pressed')}>
            <Text style={[style, {color}]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonComp;


const styles = StyleSheet.create({
    container : {
        borderRadius: 7,
        overflow: 'hidden',
        padding: 8
    }
})