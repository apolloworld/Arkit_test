import {
  View,
  Image,
  Text,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { IconText } from "./IconText";
import { MD2Colors } from "react-native-paper";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { covertRatetoString } from "../Utils";
import { ScrollView } from "react-native-gesture-handler";

export const ImageDetail = ({ imageInfo }: { imageInfo: any }) => {
  const window = useWindowDimensions();
  const isPortrait = window.width < window.height;
  console.log("isPortrait", isPortrait);
  return (
    <ScrollView>
      <View
        style={styles(imageInfo, window).imageDetailContainer}
      >
        <Image
          source={{ uri: imageInfo.largeImageURL }}
          style={styles(imageInfo, window).largeImage}
        />
        <View>
          <Text style={styles(imageInfo, window).sizeText}>
            {imageInfo.imageWidth} x {imageInfo.imageHeight}
          </Text>
          <View style={styles(imageInfo, window).userDetail}>
            {
              imageInfo.userImageURL === "" ?
              <Text style={styles(imageInfo, window).userAvatarText}>{imageInfo.user[0]}</Text>
              :
              
            <Image
            source={{ uri: imageInfo.userImageURL }}
            style={styles(imageInfo, window).userAvatar}
          />
            }
            <Text>{imageInfo.user}</Text>
          </View>
          <View style={styles(imageInfo, window).imageTagList}>
            {imageInfo.tags.split(", ").map((tag: string) => (
              <Text key={`key-${tag}`} style={styles(imageInfo, window).imageTagText}>
                {tag}
              </Text>
            ))}
          </View>
          <View style={styles(imageInfo, window).infoTextBox}>
            <IconText
              icon={<MaterialCommunityIcons name="eye" size={20} />}
              text={covertRatetoString(imageInfo.views)}
            />
            <IconText
              icon={<MaterialCommunityIcons name="download" size={20} />}
              text={covertRatetoString(imageInfo.downloads)}
            />
            <IconText
              icon={<AntDesign name="like1" size={20} />}
              text={covertRatetoString(imageInfo.downloads)}
            />
            <IconText
              icon={<MaterialCommunityIcons name="comment" size={20} />}
              text={covertRatetoString(imageInfo.downloads)}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};



const styles = (imageInfo: any, windowInfo: any) => StyleSheet.create({
  imageDetailContainer: {
    padding: 10,
    marginBottom: 20,
  },
  largeImage: {
    width: windowInfo.width - 20,
    height: undefined,
    aspectRatio: imageInfo.imageWidth / imageInfo.imageHeight,
    borderWidth: 1,
    borderColor: MD2Colors.grey400,
  },
  sizeText: {
    alignSelf: "flex-end",
  },
  userDetail: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: MD2Colors.grey500,
    marginRight: 10,
  },
  userAvatarText: {
    backgroundColor: MD2Colors.blue400,
    color: MD2Colors.white,
    textAlignVertical: "center",
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  imageTagText: {
    backgroundColor: MD2Colors.cyan300,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  imageTagList: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoTextBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
