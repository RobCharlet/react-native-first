import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import ColorBox from './components/ColorBox';

const App = () => {
  return (
    <SafeAreaView>
      <View style={[Styles.container]}>
        <Text style={Styles.title}>
          Here are some boxes of differents colours
        </Text>
        <ColorBox colorName="Cyan" hexCode="#2aa198" />
        <ColorBox colorName="Blue" hexCode="#268bd2" />
        <ColorBox colorName="Magenta" hexCode="#d33682" />
        <ColorBox colorName="Orange" hexCode="#cb4b16" />
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});

export default App;
