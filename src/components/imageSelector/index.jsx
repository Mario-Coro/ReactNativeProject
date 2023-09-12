import { Ionicons } from "@expo/vector-icons";
import { requestMediaLibraryPermissionsAsync, launchImageLibraryAsync } from "expo-image-picker";
import { useState } from "react";
import { TouchableOpacity, View, Text, Image, Alert } from "react-native";
import { styles } from "./style";

export const ImageSelector = ({ onSelect }) => {
  const [image, setImage] = useState(null);
  const verifyPermissions = async () => {
    const { status } = await requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "You need to grant camera permissions to use this app.", [
        { text: "Okay" },
      ]);
      return false;
    }
    return true;
  };

  onHandleTakePhoto = async () => {
    const isPermissionCamera = await verifyPermissions();
    if (!isPermissionCamera) return;
    const result = await launchImageLibraryAsync({
      mediaTypes: "Images",
      allowsEditing: true,
      aspect: [20, 20],
      quality: 0.5,
    });

    setImage(result.assets[0].uri);
    onSelect({ uri: result.assets[0].uri, base64: result.assets[0].base64 });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.content} onPress={onHandleTakePhoto}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} resizeMode="contain" />
        ) : (
          <Ionicons name="ios-camera" size={24} />
        )}
      </TouchableOpacity>
    </View>
  );
};
