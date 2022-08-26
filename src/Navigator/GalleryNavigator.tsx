import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchScr } from '../Screens/SearchScr';
import { GalleryStackParams } from "./NavigatorParams";
import { DetailScr } from '../Screens/DetailScr';

const GalleryStack = createStackNavigator<GalleryStackParams>();

export const GalleryNavigator = () => {
    return (
        <GalleryStack.Navigator>
            <GalleryStack.Screen name="ImageSearch" component={SearchScr}/>
            <GalleryStack.Screen name="ImageDetail" component={DetailScr}/>
        </GalleryStack.Navigator>
    )
}