import { View, StyleSheet, PermissionsAndroid, Button, Platform, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Geolocation from '@react-native-community/geolocation';
import { useEffect, useState } from 'react';
import axios from "axios";

function AnimatedInput(): JSX.Element {
    const { top } = useSafeAreaInsets()
    const [nativeLocation, setNativeLocation] = useState({ longitude: 0, latitude: 0 })
    const [formatLocation, setFormatLocation] = useState('0')
    const [addressStr, setAddressStr] = useState('')
    const [loading, setLoading] = useState(false)
    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
                {
                    title: 'Cool Photo App Camera Permission',
                    message:
                        'oneLight App needs access to your Geolocation ' +
                        'so you can take awesome foods.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the Geolocation');
            } else {
                console.log('Geolocation permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };
    const getGeoLocation = () => {
        setLoading(true)
        Geolocation.getCurrentPosition(
            ({ coords }) => {
                console.log('9898获取地理位置信息---' + Platform.OS, coords)
                setNativeLocation({ longitude: coords.longitude, latitude: coords.latitude })
                axios.get(`https://restapi.amap.com/v3/assistant/coordinate/convert?locations=${coords.longitude},${coords.latitude}&coordsys=gps&key=227e01c89617d8bc47abdc7d83a00e3a`).then(res => {
                    console.log('9898火星坐标转换：', res)
                    setFormatLocation(res.data.locations)
                    axios.get(`https://restapi.amap.com/v3/geocode/regeo?location=${res.data.locations}&key=227e01c89617d8bc47abdc7d83a00e3a&radius=1000&extensions=all`).then(res1 => {
                        console.log('9898位置信息：', res1)
                        setAddressStr(res1.data.regeocode.formatted_address)
                        setLoading(false)
                    })
                })
            },
            (err) => {
                console.log('9898为什么不能请求---' + Platform.OS, err)
            },
            {
                timeout: 20000,
                maximumAge: 0,
                enableHighAccuracy: false
            }
        )
    }
    return (
        <View style={[styles.contentBox, { paddingTop: top }]}>
            <Button title='获取位置信息' onPress={getGeoLocation} />
            <Button title='安卓特有' onPress={requestCameraPermission} />
            {
                loading ?
                    <View>
                        <View style={{ backgroundColor: 'green' }}>
                            <Text>Geolocation获取的原生经度：查询中。。。</Text>
                            <Text>Geolocation获取的原生纬度：查询中。。。</Text>
                        </View>
                        <View style={{ backgroundColor: 'yellow' }}>
                            <Text>Geolocation转换后的经纬度：查询中。。。</Text>
                        </View>
                        <View style={{ backgroundColor: 'orange' }}>
                            <Text>转译后的地址信息：查询中。。。</Text>
                        </View>
                    </View>
                    : <View>
                        <View style={{ backgroundColor: 'green' }}>
                            <Text>Geolocation获取的原生经度：{nativeLocation.longitude}</Text>
                            <Text>Geolocation获取的原生纬度：{nativeLocation.latitude}</Text>
                        </View>
                        <View style={{ backgroundColor: 'yellow' }}>
                            <Text>Geolocation转换后的经纬度：{formatLocation}</Text>
                        </View>
                        <View style={{ backgroundColor: 'orange' }}>
                            <Text>转译后的地址信息：{addressStr}</Text>
                        </View>
                    </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    contentBox: {
        position: 'absolute',
        top: 0,
        width: '100%',
        backgroundColor: 'aquamarine',
        zIndex: 1
    }
})
export default AnimatedInput