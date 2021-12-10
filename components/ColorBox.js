import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = { backgroundColor: hexCode };
  return (
    <View style={[Styles.box, boxColor]}>
      <Text style={Styles.boxText}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    marginBottom: 10,
  },
  boxText: {
    color: 'white',
  },
});

export default ColorBox;
