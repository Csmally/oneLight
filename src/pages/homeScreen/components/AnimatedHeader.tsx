import { StyleSheet, Animated, Image, TouchableWithoutFeedback, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getViewSize } from '@/utils/sizeTool';
import AddressPosition from './AddressPosition';

function AnimatedHeader(props: any): JSX.Element {
    const { scrollDistance, isAnimatedMid, allAnimatedDistance } = props
    const { top } = useSafeAreaInsets()
    const toSearchPage = () => {
        console.log('9898我要去搜索浮层页啦')
    }
    return (
        <View style={[styles.container, { paddingTop: top }]}>
            <AddressPosition scrollDistance={scrollDistance} isAnimatedMid={isAnimatedMid} allAnimatedDistance={allAnimatedDistance} />
            <TouchableWithoutFeedback onPress={toSearchPage}>
                <Animated.View style={[
                    styles.inputSearch,
                    isAnimatedMid ? styles.inputSearchBorder : null,
                    {
                        transform: [
                            {
                                scaleX: scrollDistance.interpolate({
                                    inputRange: [0, allAnimatedDistance],
                                    outputRange: [1, 0.8],
                                    extrapolate: 'clamp'
                                })

                            },
                            {
                                translateY: scrollDistance.interpolate({
                                    inputRange: [0, allAnimatedDistance],
                                    outputRange: [0, -1 * getViewSize(22)],
                                    extrapolate: 'clamp'
                                }),
                            },
                            {
                                translateX: scrollDistance.interpolate({
                                    inputRange: [0, allAnimatedDistance],
                                    outputRange: [0, getViewSize(35.5)],
                                    extrapolate: 'clamp'
                                }),
                            }
                        ]
                    }
                ]}>
                    <Image source={require('@/static/searchIcon.png')} style={styles.searchImg} />
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        width: '100%',
        padding: getViewSize(10),
        zIndex: 2
    },
    inputSearch: {
        display: 'flex',
        justifyContent: 'center',
        height: getViewSize(28),
        borderRadius: getViewSize(8),
        backgroundColor: '#fff'
    },
    inputSearchBorder: {
        borderWidth: 2,
        borderColor: '#333333'
    },
    searchImg: {
        width: getViewSize(20),
        height: getViewSize(20),
        marginLeft: getViewSize(5)
    }
})
export default AnimatedHeader