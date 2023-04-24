import { View, StyleSheet, Image, Text, Animated, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { getViewSize } from '@/utils/sizeTool';

const renderData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function HomeScreen(props: any): JSX.Element {

    const { navigation, route } = props

    const onScroll = () => {
        console.log('9898滑动')
    }

    const onPress = () => {
        console.log('9898我是item啊啊')
    }

    return (
        <View style={styles.page}>
            {/* <AnimatedHeader scrollDistance={scrollDistance} isAnimatedMid={isAnimatedMid} allAnimatedDistance={allAnimatedDistance} /> */}
            <Animated.View style={[
                styles.titleBack,
                {
                    opacity: scrollDistance.interpolate({
                        inputRange: [0, allAnimatedDistance],
                        outputRange: [1, 1],
                        extrapolate: 'clamp'
                    })
                }
            ]} />
            <Animated.FlatList
                data={renderData}
                //禁止ios滚动弹簧效果
                // bounces={true}
                onScroll={onScroll}
                // 后续具体数量需要结合实际优化
                // initialNumToRender={10}
                // ListHeaderComponent={() => (
                //     <Swiper
                //         style={styles.swiper}
                //         paginationStyle={{ bottom: getViewSize(15) }}
                //         activeDotStyle={styles.activeDot}
                //         autoplay>
                //         {
                //             imgUrls.map((uri, index) => <Image source={{ uri }} fadeDuration={100} key={index} style={styles.swiperImg} />)
                //         }
                //     </Swiper>
                // )}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={onPress}>
                        <View style={styles.renderItem}>
                            <Text>{index}</Text>
                            <Text>{'我是第' + item + '个'}</Text>
                        </View>
                    </TouchableOpacity>
                )} />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#EDF0F1'
    },
    swiper: {
        height: getViewSize(300)
    },
    swiperImg: {
        flex: 1
    },
    activeDot: {
        width: '3%',
        backgroundColor: '#a3a3a3'
    },
    renderItem: {
        marginHorizontal: getViewSize(10),
        marginVertical: getViewSize(5),
        backgroundColor: 'green'
    },
    titleBack: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: getViewSize(100),
        backgroundColor: 'pink',
        zIndex: 1
    }
})

export default HomeScreen;