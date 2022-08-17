import React from 'react';
import {ScrollView, Image, Text, View} from 'react-native';
import styles from './Stories.style';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const Stories = ({data}) => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            <View style={styles.storyContainer}>
                <View style={styles.story}>
                    <View style={styles.myStoryLine}>
                        <Image 
                            source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}} 
                            style={styles.storyImage}
                        />
                    </View>
                    <Text style={styles.myStoryText}>Hikayen</Text>
                    <IconAntDesign name="pluscircle" color={'blue'} size={20} style={styles.myStoryIcon}/>
                </View>
                {data.map((story) => (
                    <View style={styles.story} key={story.id.toString()}>
                        <View style={styles.storyLine}>
                            <Image
                                source={{uri: story.profilepicURL}} 
                                style={styles.storyImage}
                            />
                        </View>
                        <Text style={styles.storyText}>{story.username}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

export default Stories;