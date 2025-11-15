import React, { useState } from 'react';
import { ScrollView, Button, View, Text, Alert, ActivityIndicator, 
StyleSheet, StatusBar, FlatList, TouchableOpacity, Image, ImageBackground } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const Separator = () => <View style={styles.separator}/>

const DATA =[
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item,{backgroundColor}]}>
    <Text style={[styles.title, styles.font, {color: textColor}, {borderWidth:1, borderColor: 'black'}]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  
  const [selectedId, setSelectedId] = useState();
  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={()=> setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  }

  const backgroundImage = {uri: 'https://legacy.reactjs.org/logo-og.png'};

  return (
    <SafeAreaProvider>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.background}>
        <ScrollView contentContainerStyle={styles.scrollContent}>

          <SafeAreaProvider>
            <SafeAreaView style={[styles.container]}>
              <ActivityIndicator size="large" />
            </SafeAreaView>
          </SafeAreaProvider>

          <Separator/>

          <SafeAreaView style={styles.container}>
            <View>
              <Text style={styles.title}>
                Hello World my name is Fran, Daffyl B.
              </Text>
              <Button title='Press me'
                onPress={()=> Alert.alert('Simple Button Pressed')}
              />
            </View>
            <View>
              <Text style={styles.title}>
                Left Right Hello World
              </Text>
              <View style={styles.fixToText}>
                <Button
                  title ="Hello"
                  onPress={()=> Alert.alert('Left Button is Pressed')}
                />
                <Button
                  title="World"
                  onPress={()=> Alert.alert('Right Button is Pressed')}
                />
              </View>
            </View>
          </SafeAreaView>

          <Separator/>

          <SafeAreaProvider>
            <SafeAreaView style={[styles.container]}>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
              />
            </SafeAreaView>
          </SafeAreaProvider>

          <Separator/>

          <SafeAreaProvider>
            <SafeAreaView style = {[styles.container, styles.alignCenter]}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
              <Image
                style={styles.tinyLogo}  
                source={{
                  uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
                }}
              />
            </SafeAreaView>
          </SafeAreaProvider>

        </ScrollView>
      </ImageBackground>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  background:{
    flex: 1,
    width: '100%',      
  },
  image:{
    flex:1,
    justifyContent: 'center',
  },
  container: {
    marginTop: 15,
    flex: 1,
    justifyContent: "center",
  },
  title: {
    textAlign: 'center',
    marginVertical: 2,
  },
  font: {
    fontSize: 30,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  separator: {
    marginVertical: 1,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  alignCenter:{
    alignItems: 'center',
  },
  text:{
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },  
  scrollContent:{
    padding:15,
  },
});

export default App;
