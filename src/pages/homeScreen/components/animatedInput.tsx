import { View, StyleSheet, Text, TextInput, Animated } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect, useState, useRef } from 'react';

function AnimatedInput(props: any): JSX.Element {
    let { scrollDistance } = props
    const { top } = useSafeAreaInsets()
    return (
        <Animated.View
            style={[
                styles.contentBox,
                {
                    paddingTop: top, 
                    opacity: scrollDistance.interpolate({
                        inputRange: [0, 180],
                        outputRange: [0, 1]
                    })
                }
            ]}>
            <Text style={styles.searchText}>搜索</Text>
            <View style={styles.inputBox}>
                <TextInput />
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    contentBox: {
        position: 'absolute',
        top: 0,
        width: '100%',
        padding: 15,
        backgroundColor: 'aquamarine',
        zIndex: 1
    },
    searchText: {
        fontSize: 22,
        fontWeight: '500'
    },
    inputBox: {
        backgroundColor: 'green'
    }
})
export default AnimatedInput