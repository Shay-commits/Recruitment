import React from "react";
import { StyleSheet } from "react-native";
import { Button, Card, Paragraph, Avatar } from "react-native-paper";
<<<<<<< HEAD
=======
import DialogButton from "./Dialog";
>>>>>>> d52b7c1c607ab5ed6e126721ac2e1697c1b259f5

export default function HeadlineItem(props) {
  // This component doesn't do anything when clicked (yet...)
  const shareButton = (props) => <Avatar.Icon {...props} icon="share" />;

  return (
    <Card style={styles.container}>
      <Card.Title
        title={"Headline List " + props.value}
        subtitle={"Body " + props.value}
        right={shareButton}
        rightStyle={styles.shareButton}
      />
      <Card.Cover source={require("../assets/images/Image.jpg")} />
      <Card.Content style={styles.footerText}>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting //
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          // since the 1500s
        </Paragraph>
      </Card.Content>
      <Card.Actions>
<<<<<<< HEAD
        <Button
          mode="outlined"
          style={styles.button}
          onPress={() => alert("You've pressed button 1")}
        >
          Button 1
        </Button>
=======
        <DialogButton btnTitle="Button 1" dialogTitle="Alert" dialogContent="You have pressed button 1" btnStyle={styles.button}/>
>>>>>>> d52b7c1c607ab5ed6e126721ac2e1697c1b259f5
        <Button
          mode="outlined"
          style={styles.button}
          onPress={() => console.log("You've pressed Button 2")}
        >
          Button 2
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
