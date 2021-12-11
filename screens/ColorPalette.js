import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  const { colors } = route.params;
  return (
    <FlatList
      style={[Styles.container]}
      data={colors}
      // Si la data contient une clé unique (avec le label "key"), pas besoin de keyExtractor
      keyExtractor={(item) => item.hexCode}
      // On doit destructurer l'objet item car il renvoie aussi l'id
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
      )}
    />
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
    backgroundColor: 'white',
  },
});

export default ColorPalette;
