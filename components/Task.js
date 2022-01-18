import React from 'react';
import { View, Text, StyleSheet, ViewBase } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

function Task(props) {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}>
            </View>
        </View>
        
    );
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: 'lightblue',
        borderRadius: 5,
        opacity: 0.5,
        marginRight: 15
    },
    // itemText:{
    //    
    // }
    circular: {
        width: 12,
        height: 12,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'blue',
    }
})

export default Task;