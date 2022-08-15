import React from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import styles from './Header.style';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontisto from 'react-native-vector-icons/Fontisto';

const Header = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.font}>
                <Image
                    source={require('./assets/instagram-font.png')}
                    style={styles.instagramFont}
                />
            </View>
            <View style={styles.icons}>
                <IconAntDesign name="plussquareo" size={30} />
                <IconAntDesign name="hearto" size={30} />
                <IconFontisto name="messenger" size={30} />
            </View>
        </SafeAreaView>
    )
}

export default Header;