import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Headline } from "react-native-paper";
import ContentTileNew from "../components/ContentTileNew";
import ContentDetailTile from "../components/ContentTileDetail";
import jobListings from "../assets/jobListings.js";
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux'





const ContentScreen = () => {
  // Creating key values based on index for mock content
 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Headline style={styles.heading}> Job Listings </Headline>
        {jobListings.map((item,i) => {
          return (
          <ContentTileNew key={i} id={i}  location={item.location} title={item.title} description={item.description} navigation="navigation" navigationRoute="ContentDetail"></ContentTileNew>
            
          )
        })}
      </ScrollView>
    </SafeAreaView>
  );
}





export default ContentScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  heading: {
    marginTop: 30,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
});












