import React, { Fragment } from "react";
import { Headline, Subheading, List, Divider } from "react-native-paper";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { connect } from "react-redux";

const HomeScreen = function ({ data }) {
  // Notice the static content. Could you use the store to make your content more dynamic?

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Headline style={styles.heading}>Welcome User1</Headline>
        <Subheading style={styles.subheading}>
          Some subheading text here...
        </Subheading>
        {data.length ? (
          data.map((item) => {
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
                    title={item.subtitle}
                    description={item.body}
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
