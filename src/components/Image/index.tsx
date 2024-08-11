import React from "react";
import {Image, StyleSheet, ImageStyle, StyleProp} from 'react-native';

interface ImageProps {
    url: string;
    style: StyleProp<ImageStyle>
};

const ImageComp: React.FC<ImageProps> = (props)=>{
    const {url, style} = props;
    return (
        <Image source={{ uri: url }} style={style} />
    )
}

export default ImageComp;

const styles = StyleSheet.create({});