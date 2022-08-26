import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

import { IconText } from "./IconText";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { covertRatetoString } from "../Utils";
import { MD2Colors } from "react-native-paper";

export const ImagePreview = ({
  imageInfo,
  handleClickItem,
}: {
  imageInfo: any;
  handleClickItem: any;
}) => (
  <View style={styles.previewContainer}>
    <TouchableOpacity style={styles.previewBox} onPressOut={handleClickItem}>
      <Image
        source={{ uri: imageInfo.previewURL }}
        style={{
          width: imageInfo.previewWidth,
          height: imageInfo.previewHeight,
        }}
      />
      <View style={styles.infoBox}>
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
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  previewContainer: {
    borderBottomWidth: 1,
    borderColor: MD2Colors.grey300
  },
  previewBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    height: 150,
  },
  infoBox: {
    marginLeft: 20,
  }
});
