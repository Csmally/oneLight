import { useRef } from 'react';
import { View, StyleSheet, Image, Text, Animated } from 'react-native';
import Swiper from 'react-native-swiper';
import AnimatedInput from './components/animatedInput';
import { Dimensions } from 'react-native';

const renderData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
function HomeScreen(props: any): JSX.Element {
    const imgUrls = [
        'https://tuchuangs.com/imgs/2023/04/02/683c8d110a207f96.jpeg',
        'https://tuchuangs.com/imgs/2023/04/02/f3903cc60270bee6.jpeg',
        'https://tuchuangs.com/imgs/2023/04/02/1b5c65b8010f7cbc.jpeg',
        'https://tuchuangs.com/imgs/2023/04/02/5a2b21f1ff9ca97f.jpeg',
        'https://tuchuangs.com/imgs/2023/04/02/8a498e8d63d8d721.jpeg',
        'https://tuchuangs.com/imgs/2023/04/02/0e79c842c30fa544.jpeg',
        'https://tuchuangs.com/imgs/2023/04/02/f79365c7f272f4c3.jpeg',
        'https://tuchuangs.com/imgs/2023/04/02/00c3969d3c81cda2.jpeg'

    ]

    const { navigation, route } = props

    const scrollDistance = useRef(new Animated.Value(0)).current

    const onScroll = Animated.event([{
        nativeEvent: {
            contentOffset: {
                y: scrollDistance
            }
        }
    }], { useNativeDriver: true })

    return (
        <View>
            <AnimatedInput scrollDistance={scrollDistance} />
            <Animated.FlatList
                style={styles.pageContent}
                data={renderData}
                //禁止ios滚动弹簧效果
                // bounces={true}
                onScroll={onScroll}
                // 后续具体数量需要结合实际优化
                // initialNumToRender={10}
                ListHeaderComponent={() => (
                    <Swiper
                        style={styles.swiper}
                        paginationStyle={{ bottom: 15 }}
                        activeDotStyle={styles.activeDot}
                        autoplay>
                        {
                            imgUrls.map((uri, index) => <Image source={{ uri }} key={index} style={styles.swiperImg} />)
                        }
                    </Swiper>
                )}
                renderItem={({ item, index, separators }) => (
                    <View style={styles.renderItem}>
                        <Text>{index}</Text>
                        <Text>{'我是第' + item + '个'}</Text>
                    </View>
                )} />
        </View>
    )
}

const styles = StyleSheet.create({
    pageContent: {
        // backgroundColor: 'pink'
    },
    swiper: {
        height: 300
    },
    swiperImg: {
        flex: 1
    },
    activeDot: {
        width: '3%',
        backgroundColor: '#000'
    },
    testImg: {
        height: 200,
        width: 300
    },
    renderItem: {
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: 'green'
    }
})

export default HomeScreen;