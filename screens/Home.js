import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [colorPalettes, setColorPalettes] = useState([]);
  // On doit utiliser useCallback pour tout ce qui est asynchrone
  const handleFetchPalettes = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    const palettes = await result.json();
    if (result.ok) {
      setColorPalettes(palettes);
    }
  });
  // [] pour qu'il ne soit executé qu'une fois
  useEffect(() => {
    handleFetchPalettes();
  }, []);

  return (
    <FlatList
      style={styles.list}
      data={colorPalettes}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() =>
            // navigation.navigate('ColorPalette', {
            //   paletteName: item.paletteName,
            //   colors: item.colors,
            // })
            // comme les attributs des objets (paletteName et colors)
            // ont les mêmes noms on peut directement passer item
            navigation.navigate('ColorPalette', item)
          }
          colorPalette={item}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
});

export default Home;
