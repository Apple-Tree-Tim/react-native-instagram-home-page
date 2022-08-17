import React from 'react';
import {SafeAreaView, View, Image, Text} from 'react-native';
import styles from './Posts.style';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFeather from 'react-native-vector-icons/Feather';


const Posts = ({post}) => {

    const isThereDescription = () => {
        if(post.description != null) {
            return <View style={styles.description}>
                <Text style={styles.username_des}>{post.username}</Text>
                <Text style={styles.des_text}>{post.description}</Text>
            </View>
        }
    }

    const isThereAnyLike = () => {
        if(post.howmanylike != null) {
            return <View style={styles.like}>
                <View style={styles.liked_user_border}>
                    <Image style={styles.liked_user} source={{uri : 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218'}}/>
                </View>
                <View style={styles.liked_user_border}>
                    <Image style={styles.liked_user} source={{uri : 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91'}}/>
                </View>
                <View style={styles.liked_user_border}>
                    <Image style={styles.liked_user} source={{uri : 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df'}}/>
                </View>
                <Text style={styles.like_text}>randomguy and {post.howmanylike} other people liked</Text>
            </View>
        }
    }

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
            {isThereAnyLike()}
            {isThereDescription()}
            <View style={styles.comment}>
                <View style={styles.comment_text}>
                    <Image style={styles.myprofilepic} source={{uri: post.myprofilepicURL}} />
                    <Text style={styles.add_comment}>Yorum ekle...</Text>
                </View>
                <View style={styles.comment_icon}>
                    <IconAntDesign name="heart" size={15} color={'red'} />
                    <IconFontisto name="fire" size={15} color={'orange'} />
                    <IconAntDesign name="pluscircleo" size={15} />
                </View>
            </View>
            <View style={styles.date}>
                <Text>{post.postDate}</Text>
            </View>
        </SafeAreaView>
    )
}

export default Posts;
