import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Card from "./Card/Card";
import { PUBS } from "@/data/Data";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// import { db } from '../../configs/FireBaseConfig';
// import { collection, getDocs, query } from 'firebase/firestore';

const Carousel = () => {
  // SLIDER LIST IN FIREBASE
  //   const [sliderList, setSliderList] = useState([]);
  //   useEffect(() => {
  //       GetSliderList();
  //   },[]);
  //   const GetSliderList = async () => {
  //       setSliderList([]);
  //       const q = query(collection(db,'Slider'));
  //       const querySnapshot = await getDocs(q);

  //       querySnapshot.forEach((doc)=>{
  //           //console.log(doc.data());
  //           setSliderList(prev=>[...prev,doc.data()]);
  //       })
  //     };
  // END FIREBASE

  const renderItem = ({ item, index }) => (
    <Card
      title={item.title}
      description={item.description}
      imageUrl={item.image}
      onPress={() => console.log(`Card ${item.id} cliquée`)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={PUBS}
        //data={sliderList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};
export default Carousel;

const styles = StyleSheet.create({
  container: {
    //paddingHorizontal: wp('3%'),
  },
  listContent: {
    paddingHorizontal: wp('2%'),
  },
})
