import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  ListRenderItem,
} from 'react-native';
import axios from 'axios';
import {IData} from '../Types/types';

interface IGetData {
  data: IData[];
}

const Home: React.FC<IGetData> = () => {
  const [data, setmyData] = useState<IData[]>([]);
  const [page, setmyPage] = useState<number>(1);

  useEffect(() => {
    const getMovies = async () => {
      await axios
        .get<IData>(
          `https://jsonplaceholder.typicode.com/albums/1/photos?_limit=10&_page=${page}`,
        )
        .then(response => {
          setmyData(data.concat(response.data));
        })
        .catch(e => console.log(e));
    };
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const renderItem: ListRenderItem<IData> = ({item}) => (
    <View style={styles.item}>
      <Image style={styles.forImage} source={{uri: item.url}} />
      <Text>{item.title}</Text>
      <Text>{item.id}</Text>
    </View>
  );
  const heandleMore = () => {
    setmyPage(page + 1);
  };
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      onEndReachedThreshold={0}
      onEndReached={heandleMore}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forImage: {
    width: 600,
    height: 600,
    borderWidth: 5,
    borderColor: 'red',
  },
});

export default Home;
