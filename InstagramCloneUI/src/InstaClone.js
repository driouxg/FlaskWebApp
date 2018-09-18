import React, { Component } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

class InstaClone extends React.Component {

  constructor() {
    super();
    this.state = {
      screenWidth: 0
    }
  }

  componentDidMount() {
    fetch("http://127.0.0.1:5000/get_sample_image")
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }).then(function(response) {
        console.log("ok");
    }).catch(function(error) {
        console.log(error);
    });

    this.setState({
      screenWidth: Dimensions.get("window").width
    });
  }

  render() {
    return (
      <View  style={{flex: 1, width: 100 + "%", height: 100 + "%"}}>
        <View style={styles.tempNav}>
          <Text>Instagram</Text>
        </View>

        <View style={styles.userBar}>
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <Image
              style={styles.userPic}
              source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2HIigsWF1O0J5soD46IU-lA6U0kGeIqUvkoR1YjA1OwLnUL_ZfA"}}
            />
          <Text style={styles.userName}>driouxg</Text>
          </View>

          <View>
            <Text style={{marginLeft: 10}}>...</Text>
          </View>
        </View>

        <Image
          style={{width: 100 + "%", height: 100}}
          source ={{
          uri:
            "https://www.pcgamesn.com/wp-content/uploads/2018/08/rainbow-six-siege-clash-tips-operator.jpg"
          }}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + "%",
    height: 75,
    backgroundColor: "rgb(250, 250, 250)",
    borderBottomColor: "rgb(233, 233, 233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"
  },

  userBar: {
    width: 100 + "%",
    height: 50,
    backgroundColor: "rgb(255, 255, 255)",
    flexDirection: "row",
    marginHorizontal: 10
  },

  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20
  },

  userName: {
    marginHorizontal: 10
  }
});

export default InstaClone;
