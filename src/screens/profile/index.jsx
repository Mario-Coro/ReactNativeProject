import { View, Text } from "react-native";
import { ImageSelector } from "../../components/imageSelector";
import { useState } from "react";
import { styles } from "./style";

export default Profile = () => {
  const [imageUri, setImageUri] = useState("");
  const onHandleImage = ({ uri, base64 }) => {
    console.warn({ uri, base64 });
  };
  return (
    <View style={styles.container}>
      <ImageSelector profileImage="" onSelect={onHandleImage} />
    </View>
  );
};
