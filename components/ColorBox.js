import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = { backgroundColor: hexCode };
  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View style={[Styles.box, boxColor]}>
      <Text style={textColor}>
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
});

export default ColorBox;
