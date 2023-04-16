import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import WelcomeScreen from '@/components/welcomeScreen';
import MainScreenStack from '@/components/mainScreenStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen'
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
    useEffect(() => {
        SplashScreen.hide();
    }, [])
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                <Stack.Screen name="MainScreenStack" component={MainScreenStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
