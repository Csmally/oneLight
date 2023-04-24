import { StyleSheet, View, Text } from 'react-native';
import { getFontSize, getViewSize } from '@/utils/sizeTool';
import { BlurView } from "@react-native-community/blur";
import PageCounter from './components/PageCounter'
import { useState } from 'react';
import OpacitySwiper from './components/OpacitySwiper';

const imgUrls = [
    'https://tuchuangs.com/imgs/2023/04/23/945f7dee14fb39f4.jpeg',
    'https://tuchuangs.com/imgs/2023/04/23/d12921d23883b1d7.jpeg',
    'https://tuchuangs.com/imgs/2023/04/23/1bc98cb602be8e78.jpeg'
]
function WelcomeScreen(props: any): JSX.Element {
    const { navigation, route } = props
    const [activeIndex, setActiveIndex] = useState(0)
    const start = () => {
        navigation.navigate('MainScreenStack')
    }
    const joinUs = () => {
        console.log('加入我们！！！')
    }
    const onIndexChanged = (index: number) => {
        setActiveIndex(index)
    }
    return (
        <View style={styles.page}>
            <OpacitySwiper onIndexChanged={onIndexChanged} imgUrls={imgUrls} />
            <BlurView
                style={styles.blurView}
                blurType="xlight"
                blurAmount={15}
                reducedTransparencyFallbackColor="white"
            />
            <View style={[styles.blurView, styles.textContainer]}>
                <View>
                    <PageCounter total={imgUrls.length} activeIndex={activeIndex} />
                </View>
                <View>
                    <Text style={[styles.fontStyle, styles.title]}>Welcome Use OneLight</Text>
                    <Text style={[styles.fontStyle, styles.title]}>这是一个专属年轻人的App</Text>
                    <Text style={[styles.fontStyle, styles.content]}>在这里，你可以</Text>
                    <Text style={[styles.fontStyle, styles.content]}>分享美食，社交，数码，时尚</Text>
                    <Text style={[styles.fontStyle, styles.content]}>
                        或者
                        <Text style={[styles.fontStyle, styles.content, styles.joinUs]} onPress={joinUs}>加入我们</Text>
                        的团队
                    </Text>
                </View>
                <View style={styles.loginBtn}>
                    <Text style={styles.loginText}>注册</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    swiperImg: {
        flex: 1
    },
    blurView: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: '60%'
    },
    textContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: getViewSize(25)
    },
    fontStyle: {
        textAlign: 'center',
        marginVertical: getViewSize(4)
    },
    title: {
        fontSize: getFontSize(18),
        fontWeight: '600'
    },
    content: {
        fontSize: getFontSize(15),
        color: '#999999'
    },
    joinUs: {
        color: '#4597f7'
    },
    loginBtn: {
        width: getViewSize(150),
        height: getViewSize(46),
        borderRadius: getViewSize(23),
        backgroundColor: '#000000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
        color: '#ffffff',
        fontSize: getFontSize(16),
        fontWeight: 'bold'
    }
})
export default WelcomeScreen;