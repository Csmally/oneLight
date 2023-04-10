import { View, StyleSheet, Image, ScrollView, Text, Button } from 'react-native';
import Swiper from 'react-native-swiper';
import AnimatedInput from './components/animatedInput'

function HomeScreen(props:any): JSX.Element {
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
    const back = () => {
        navigation.goBack()
    }
    return (
        <ScrollView style={styles.pageContent}>
            <AnimatedInput/>
            <Swiper
            style={styles.swiper}
            paginationStyle={{bottom: 15}}
            activeDotStyle={styles.activeDot}
            autoplay>
                {
                    imgUrls.map((uri,index)=><Image source={{uri}} key={index} style={styles.swiperImg}/>)
                }
            </Swiper>
            <Button title='返回' onPress={back}/>
        </ScrollView>
        // <View>
        //     <Text>有没有啊</Text>
        // </View>
    )
}

const styles = StyleSheet.create({
    pageContent: {
        backgroundColor: 'pink',

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
    }
})

export default HomeScreen;