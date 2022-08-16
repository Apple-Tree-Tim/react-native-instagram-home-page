import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
    },

    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },

    user_detail: {
        flexDirection: 'row',
        paddingLeft: 5,
    },

    user_option: {
        paddingRight: 5,
        justifyContent: 'center',
    },

    profilepic: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
    },

    username: {
        alignSelf: 'center',
        marginLeft: 15,
        fontWeight: 'bold',
        color: 'black',
        textDecorationLine: 'underline',
    },

    shared: {
        flex: 8,
    },

    shared_image: {
        width: '100%',
        height: Dimensions.get('window').height / 2,
    },

    activity: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 5,
    },

    visible_activity: {
        flexDirection: 'row',
        width: Dimensions.get('window').width / 3,
        justifyContent: 'space-around',
    },

    nonvisible_activity: {
        marginRight: 5,
    },
    
    comment:{
        flex: 1,
    },

    date: {
        flex: 1,
    },

    

})