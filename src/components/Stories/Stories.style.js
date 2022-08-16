import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    storyContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
    },

    story: {
        marginRight: 20,
    },

    storyLine: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        borderWidth: 2,
        borderColor: '#d3d3d3',
        alignItems: 'center',
        justifyContent: 'center',
    },

    storyImage: {
        width: '90%',
        height: '90%',
        borderRadius: 100 / 2,
    },

    storyText: {
        alignSelf: 'center',
        marginTop: 5,
    },

    myStoryText: {
        alignSelf: 'center',
        marginTop: 5,
        color: 'black',
    },

    myStoryLine: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    myStoryIcon: {
        position: 'absolute',
        marginLeft: 70,
        marginTop: 70,
    }
    
})