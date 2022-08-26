import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TextInputChangeEventData,
  NativeSyntheticEvent,
} from "react-native";
import {
  ActivityIndicator,
  Button,
  MD2Colors,
  TextInput,
} from "react-native-paper";
import { ImagePreview } from "../Components/ImagePreview";
import { GalleryStackParams } from "../Navigator/NavigatorParams";
import { imageListSelector } from "../store/features/image/imageSelector";
import { searchImagesAsync } from "../store/features/image/imageSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export const SearchScr = ({
  navigation,
  route,
}: StackScreenProps<GalleryStackParams, "ImageSearch">) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const { imageList: imageArr, isLoading } = useAppSelector((state) =>
    imageListSelector(state)
  );
  const dispatch = useAppDispatch();

  const handleClickSearch = () => {
    dispatch(searchImagesAsync({ searchKeyword }));
  };

  const handleGoDetail = (imgInd: number) => {
    navigation.navigate("ImageDetail", { imageInd: imgInd });
  };

  const handleChangeKeyword = (text: string) => {
    setSearchKeyword(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          label="Search"
          mode="outlined"
          style={styles.searchInput}
          value={searchKeyword}
          onChangeText={handleChangeKeyword}
        />
        <Button
          icon="magnify"
          mode="contained"
          style={styles.searchBtn}
          onPress={handleClickSearch}
          disabled={isLoading as boolean}
        >
          Search
        </Button>
      </View>
      {isLoading ? (
        <ActivityIndicator
          animating={true}
          color={MD2Colors.blue500}
          style={styles.loadingSpinner}
          size={80}
        />
      ) : (
        <FlatList
          data={imageArr as []}
          horizontal={false}
          pagingEnabled={true}
          decelerationRate={0}
          snapToInterval={10}
          contentContainerStyle={{ paddingBottom: 100 }}
          onMomentumScrollEnd={() => {}}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: any) => `key-image-item-${item.id}`}
          renderItem={({ item, index }) => (
            <ImagePreview
              imageInfo={item}
              handleClickItem={() => handleGoDetail(index)}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
  },
  searchBtn: {
    width: 130,
  },
  loadingSpinner: {
    marginTop: 50,
  },
});
