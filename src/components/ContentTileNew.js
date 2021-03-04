import React from "react";
import { StyleSheet, Text } from "react-native";
import { Button, Card, Paragraph, Avatar } from "react-native-paper";
import { contentDetailChanger } from "../redux/reducers/contentDetailReducer"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';




  
export default function HeadlineItem(props) {
  // This component doesn't do anything when clicked (yet...)
  const shareButton = (props) => <Avatar.Icon {...props} icon="share" />;
  const dispatch = useDispatch();
 const navigation = useNavigation();
  return (
    <Card style={styles.container}>
      <Card.Title
        title={props.title}
        subtitle={props.location[0] + " | " + props.location[1]}
        right={shareButton}
        rightStyle={styles.shareButton}
      />
      <Card.Content style={styles.footerText}>
        <Text numberOfLines={5} style={{ width: 300}}>
    {props.description}
</Text>
    
      </Card.Content>
      <Card.Actions>
        <Button
          mode="outlined"
          style={styles.button}
          onPress={() => { 
          
          dispatch(contentDetailChanger(`${props.id}`));
          
          navigation.navigate(`${props.navigationRoute}`) }}
        >
          Apply
        </Button>
        <Button
          mode="outlined"
          style={styles.button}
          onPress={() => console.log("You've pressed Button 2")}
        >
         Save
        </Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 5,
    borderTopColor: "purple",
    borderTopWidth: 4,
  },
  shareButton: {
    justifyContent: "center",
    paddingRight: 10,
  },
  footerText: {
    paddingTop: 10,
  },
  button: {
    margin: 5,
  },
});
