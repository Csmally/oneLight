import { Button, StyleSheet, View } from 'react-native';

function WelcomeScreen(props: any): JSX.Element {
    const { navigation, route } = props
    const start = () => {
        navigation.navigate('MainScreenStack')
    }
    return (
        <View style={styles.page}>
            <Button title='Continue' onPress={start} />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'center'
    }
})
export default WelcomeScreen;