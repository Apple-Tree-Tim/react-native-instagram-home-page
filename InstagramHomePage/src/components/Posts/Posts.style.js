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
        fontSize: 15,
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
    },

    visible_activity: {
        flexDirection: 'row',
        width: Dimensions.get('window').width / 3,
        justifyContent: 'space-around',
    },

    nonvisible_activity: {
        marginRight: 5,
    },

    like: {
        flexDirection: 'row',
        margin: 5,
        paddingLeft: 5,
    },

    liked_user_border: {
        width: 26,
        height: 26,
        borderRadius: 26 / 2,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: -6,
    },

    liked_user: {
        width: '90%',
        height: '90%',
        borderRadius: 26 / 2,
    },

    like_text: {
        fontSize: 15,
        color: 'black',
        marginLeft: 12,
        marginTop: 2,
    },

    description: {
        flexDirection: 'row',
    },

    username_des: {
        marginLeft: 16,
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
    },

    des_text: {
        marginLeft: 6,
        color: 'black',
        fontSize: 15,
    },
    
    comment:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 6,
    },

    comment_text: {
        flexDirection: 'row',
        paddingLeft: 10,
    },

    comment_icon: {
        flexDirection: 'row',
        alignItems: 'center',
        width: Dimensions.get('window').width / 4.5,
        justifyContent: 'space-evenly',
    },

    myprofilepic: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
    },

    add_comment:{
        fontSize: 15,
        alignSelf: 'center',
        marginLeft: 10,
    },

    date: {
        flex: 1,
        marginLeft: 16,
        marginBottom: 10,
    },
    
})