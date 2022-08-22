import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './Footer.style';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterialCom from 'react-native-vector-icons/MaterialCommunityIcons';

const Footer = () => {
    return (
        <SafeAreaView style={styles.icons}>
            <IconFeather name="home" size={30} color={'black'} />
            <IconFeather name="search" size={30} color={'black'} />
            <IconMaterialCom name="play-box-outline" size={30} color={'black'} />
            <IconFeather name="shopping-bag" size={30} color={'black'} />
            <IconFeather name="user" size={30} color={'black'} />
        </SafeAreaView>
    )
}

export default Footer;
