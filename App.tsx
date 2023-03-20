import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@/pages/home'
import Orders from '@/pages/orders'
import Forum from '@/pages/forum'
import Mine from '@/pages/mine'

const TabStack = createBottomTabNavigator();

const App = (): JSX.Element => {
    return (
        <NavigationContainer>
            <TabStack.Navigator>
                <TabStack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: '主页' }}
                />
                <TabStack.Screen
                    name="Orders"
                    component={Orders}
                    options={{ title: '订单' }}
                />
                <TabStack.Screen
                    name="Forum"
                    component={Forum}
                    options={{ title: '论坛' }}
                />
                <TabStack.Screen
                    name="Mine"
                    component={Mine}
                    options={{ title: '我的' }}
                />
            </TabStack.Navigator>
        </NavigationContainer>
    );
};

export default App;
