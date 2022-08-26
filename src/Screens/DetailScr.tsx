import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Text, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { ImageDetail } from "../Components/ImageDetail";
import { imageListSelector } from "../store/features/image/imageSelector";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { StackScreenProps } from "@react-navigation/stack";
import { GalleryStackParams } from "../Navigator/NavigatorParams";

export const DetailScr = ({
    navigation,
    route,
  }: StackScreenProps<GalleryStackParams, "ImageDetail">) => {
    const {imageList: imageArr} = useAppSelector((state) =>
      imageListSelector(state)
    );
    return (
        <View>
            <ImageDetail imageInfo={imageArr[route.params.imageInd]} />
        </View>
    );
};