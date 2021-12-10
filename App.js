import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={Styles.safeArea}>
      <View style={[Styles.container, Styles.pink]}>
        <Text>Hello, world!</Text>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  pink: {
    borderColor: 'pink',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: 'teal',
    borderWidth: 1,
  },
  safeArea: {
    flex: 2,
  },
});

export default App;
