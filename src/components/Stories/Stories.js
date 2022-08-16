import React from 'react';
import {SafeAreaView, ScrollView, Image, Text, View} from 'react-native';
import styles from './Stories.style';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const Stories = () => {
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
                <View style={styles.story}>
                    <View style={styles.storyLine}>
                        <Image 
                            source={{uri: 'https://images.unsplash.com/photo-1485875437342-9b39470b3d95'}} 
                            style={styles.storyImage}
                        />
                    </View>
                    <Text style={styles.storyText}>women1</Text>
                </View>
                <View style={styles.story}>
                    <View style={styles.storyLine}>
                        <Image 
                            source={{uri: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6'}} 
                            style={styles.storyImage}
                        />
                    </View>
                    <Text style={styles.storyText}>men1</Text>
                </View>
                <View style={styles.story}>
                    <View style={styles.storyLine}>
                        <Image 
                            source={{uri: 'https://images.unsplash.com/photo-1457449940276-e8deed18bfff'}} 
                            style={styles.storyImage}
                        />
                    </View>
                    <Text style={styles.storyText}>men2</Text>
                </View>
                <View style={styles.story}>
                    <View style={styles.storyLine}>
                        <Image 
                            source={{uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'}} 
                            style={styles.storyImage}
                        />
                    </View>
                    <Text style={styles.storyText}>women2</Text>
                </View>
            </View>
        </ScrollView>

    )
}

export default Stories;