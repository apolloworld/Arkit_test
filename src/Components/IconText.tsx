import { View, Text, StyleSheet } from "react-native";

export const IconText = ({ icon, text }: { icon: any; text: string }) => (
  <View style={styles.container}>
    {icon}
    <Text style={styles.contentText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    contentText: {
        marginLeft: 10,
    }
});
