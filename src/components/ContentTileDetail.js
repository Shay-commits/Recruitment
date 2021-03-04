import React from "react";
import { StyleSheet, Text, List } from "react-native";
import { Button, Card, Paragraph, Avatar } from "react-native-paper";

export default function HeadlineItem(props) {
  // This component doesn't do anything when clicked (yet...)
  const shareButton = (props) => <Avatar.Icon {...props} icon="share" />;

  return (
    <Card style={styles.container}>
      <Card.Title
        title={props.title}
        subtitle={`${props.location1}  |  ${props.location2}`}
        right={shareButton}
        rightStyle={styles.shareButton}
      />
      
      <Card.Actions>
        <Button
          mode="outlined"
          style={styles.buttonLong}
          onPress={() => alert("You've pressed button 1")}
        >
          Apply
        </Button>
        
      </Card.Actions>
      
      <Card.Title title="Job Description"/>
      
      <Card.Content style={styles.footerText} title="Job Desciption">
        <Text>
          {props.description}
        </Text>
      </Card.Content>
      
      <Card.Title title="Qualifications"/>
        <Card.Content style={styles.footerText} title="Job Desciption">
          {props.qualifications.map((x,i) => {
            return (
            <Text style={{flex: 1, paddingLeft: 5, paddingBottom: 5}}> {x} </Text>  
            )
          })}
          
      </Card.Content>
        
    

      
      <Card.Actions>
        <Button
          mode="outlined"
          style={styles.button}
          onPress={() => alert("You've pressed button 1")}
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
  buttonLong: {
    width: 300,
    margin: 5,
  }
});
