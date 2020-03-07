import * as React from 'react';

import Home from '../containers/home';
import Film from '../containers/film';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export enum ROUTES_NAME {
    Home = "Home",
    Film = "Film"
}


function Routes() {
    return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName={ROUTES_NAME.Home}>

                    <Stack.Screen options={{
                        headerTitle: 'StarWars',
                        headerTintColor: '#ffffff',
                        headerStyle: {
                            backgroundColor: 'black',
                        },
                    }} name={ROUTES_NAME.Home} component={Home} />
                
                    <Stack.Screen options={{
                        headerTitle: 'Detail of Movie',
                        headerTintColor: '#ffffff',
                        headerStyle: {
                            backgroundColor: 'black',
                        }
                    }} name={ROUTES_NAME.Film} component={Film} />

                </Stack.Navigator>                
            </NavigationContainer>
       
    );
}
export default Routes;