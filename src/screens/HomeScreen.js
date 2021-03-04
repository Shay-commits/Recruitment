import React, { Fragment } from "react";
import { Headline, Subheading, List, Divider } from "react-native-paper";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useSelector, useDispatch, connect } from 'react-redux';

const HomeScreen = function () {
  // Notice the static content. Could you use the store to make your content more dynamic?
  
 const userDatas = useSelector(state=> state.userReducer);

 
 const userData = userDatas[0].applications;
 
 const userBook = userDatas[0].bookmarks;
 console.log(userBook)

 
 

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Headline style={styles.heading}> Welcome Back Ike </Headline>
        <Subheading style={styles.subheading}>
          Your Applications
        </Subheading>
        {userData.length ? (
          userData.map((item) => {
            return (
              <Fragment key={item.id}>
                <List.Accordion
                  title={item.title}
                  style={styles.accordion}
                  left={(props) => (
                    <List.Icon {...props} icon="newspaper-variant-outline" />
                  )}
                >
                  <List.Item
                    style={styles.listItem}
                    titleStyle={styles.listItemTitle}
                    title={`Application Status: ${item.status}`}
                    description={`Feedback Score: ${item.feedback}`}
                    descriptionNumberOfLines={5}
                  />
                </List.Accordion>
                <Divider />
              </Fragment>
            );
          })
        ) : (
          <Subheading style={styles.subheading}>Loading...</Subheading>
        )}
        
        
        <Subheading style={styles.subheading}>
          Saved Jobs
        </Subheading>
        {userBook.length ? (
          userBook.map((item) => {
            return (
              <Fragment key={item.id}>
                <List.Accordion
                  title={item.title}
                  style={styles.accordion}
                  left={(props) => (
                    <List.Icon {...props} icon="newspaper-variant-outline" />
                  )}
                >
                  <List.Item
                    style={styles.listItem}
                    titleStyle={styles.listItemTitle}
                    title={`Salary: ${item.salary}`}
                    description={`Description: ${item.careerLevel}`}
                    descriptionNumberOfLines={5}
                  />
                </List.Accordion>
                <Divider />
              </Fragment>
            );
          })
        ) : (
          <Subheading style={styles.subheading}>Loading...</Subheading>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  // accessing 'data' from fetchDataReducer in store
  return {
    data: state.fetchDataReducer.data,
  };
};

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },

  heading: {
    marginTop: 30,
    marginBottom: 5,
    paddingHorizontal: 15,
  },

  subheading: {
    paddingBottom: 5,
    paddingHorizontal: 15,
    marginTop: 20,
  },

  accordion: {
    paddingVertical: 0,
    paddingHorizontal: 10,
  },

  listItem: {
    paddingLeft: 10,
    paddingTop: 0,
  },

  listItemTitle: {
    paddingBottom: 10,
  },
});
