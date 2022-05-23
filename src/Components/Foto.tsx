import React, {useState} from 'react';
import {View, StyleSheet, Button, Image, Text} from 'react-native';
import {ImagePickerResponse, launchCamera} from 'react-native-image-picker';

const Foto: React.FC = () => {
  const [myFoto, setFoto] = useState<string | undefined>();

  const takeFotoHandler = async () => {
    const image: ImagePickerResponse = await launchCamera({
      saveToPhotos: true,
      mediaType: 'photo',
    });
    let response = image.assets?.find(item => item.uri);
    setFoto(response?.uri);
  };
  let imagePrewiev = <Text>Image</Text>;
  if (myFoto) {
    imagePrewiev = <Image style={styles.forMyFoto} source={{uri: myFoto}} />;
  }

  return (
    <View style={styles.forCommon}>
      <View style={styles.forWrapIcon}>
        <View style={styles.forBorder1}>{imagePrewiev}</View>
      </View>
      <View style={styles.forWrapButton}>
        <Button title="Take a photo" color="pink" onPress={takeFotoHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  forCommon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  forWrapButton: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forWrapIcon: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  forBorder1: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: 'pink',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  forMyFoto: {
    width: 100,
    height: 100,
  },
});

export default Foto;
