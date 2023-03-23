import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/pages/homeScreen'
import OrdersScreen from '@/pages/ordersScreen'
import CommunityScreen from '@/pages/communityScreen'
import MineScreen from '@/pages/mineScreen'
import { PATH_NAME, PATH_NAME_ZH } from '@/consts/navigation';
import CustomTabBar from '@/components/customTabBar'

const Tab = createBottomTabNavigator();

const App = (): JSX.Element => {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
                <Tab.Screen
                    name={PATH_NAME.HOME}
                    component={HomeScreen}
                    options={{ title: PATH_NAME_ZH.HOME, headerShown: false, }}
                />
                <Tab.Screen
                    name={PATH_NAME.ORDERS}
                    component={OrdersScreen}
                    options={{ title: PATH_NAME_ZH.ORDERS }}
                />
                <Tab.Screen
                    name={PATH_NAME.COMMUNITY}
                    component={CommunityScreen}
                    options={{ title: PATH_NAME_ZH.COMMUNITY }}
                />
                <Tab.Screen
                    name={PATH_NAME.MINE}
                    component={MineScreen}
                    options={{ title: PATH_NAME_ZH.MINE, headerShown: false }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
