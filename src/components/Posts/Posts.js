import React from 'react';
import {SafeAreaView, View, Image, Text} from 'react-native';
import styles from './Posts.style';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFeather from 'react-native-vector-icons/Feather';


const Posts = ({post}) => {
    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <View style={styles.user_detail}>
                    <Image style={styles.profilepic} source={{uri: post.profilepicURL}} />
                    <Text style={styles.username}>{post.username}</Text>
                </View>
                <View style={styles.user_option}>
                    <IconEntypo name="dots-three-horizontal" size={20} color={'black'}/>
                </View>
            </View>

            <View style={styles.shared}>
                <Image style={styles.shared_image} source={{uri: post.sharedURL}} />
            </View>

            <View style={styles.activity}>
                <View style={styles.visible_activity}>
                    <IconAntDesign name="hearto" size={30} color={'black'} />
                    <IconFeather name="message-circle" size={30} color={'black'} />
                    <IconFeather name="send" size={30} color={'black'} />
                </View>
                <View style={styles.nonvisible_activity}>
                    <IconFeather name="bookmark" size={30} color={'black'} />
                </View>
            </View>

            <View style={styles.comment}>
                <Image style={styles.myprofilepic} source={post.myprofilepicURL} />
                <Text>Yorum ekle...</Text>
                <IconAntDesign name="heart" size={20} color={'red'}/>
                <IconAntDesign name="pluscircle" size={20} />
            </View>

            <View style={styles.date}>
                <Text>{post.postDate}</Text>
            </View>
            
        </SafeAreaView>

    )
}

export default Posts;