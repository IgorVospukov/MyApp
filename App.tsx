import React from 'react';
import {StyleSheet, View} from 'react-native';
import Navigation from './src/Components/Navigation';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
export default App;
