import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import DEFAULT from '../../assets/images/logo.png';

const Result = ({navigation}) => {
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Result
        </Text>
        <Text style={styles.subtitle}>
         Passed Congratulations
        </Text>
      </View>
      <View>
        <View style={styles.userPicContainer} >
          <Image resizeMode="contain" style={styles.userPic} source={{uri: DEFAULT}} />
        </View>
        <View>
          
        </View>
      </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} activeOpacity={0.7}>
          <Text style={styles.button} >
            Retry
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} activeOpacity={0.7}>
          <Text style={styles.button} >
            Back to Home
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
   backgroundColor: "black"
  },
  title: {
    width: "100%",
    color: "white",
    fontSize: 45,
    padding: 10,
    textAlign: "center"
  },
  subtitle: {
    width: "100%",
    color: "white",
    fontSize: 16,
    padding: 5,
    textAlign: "center"
  },
  resultContainer: {
    width: "80%",
    marginHorizontal: "auto",
    marginTop: 20
  },
  result: {
    height: 60,
    backgroundColor: "#e7e7e7",
    borderRadius: 25,
    marginBottom: 25,
    paddingHorizontal: 20
  },
  userPicContainer: {
    width: "80%",
    borderRadius: 100,
    marginHorizontal: "auto",
    paddingHorizontal: 40,
  },
  userPic: {
    width: 200,
    height: 200,
    borderRadius: 300
  },
  buttonContainer: {
    width: "85%",
    marginHorizontal: "auto",
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    width: "40%",
    height: 70,
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#000",
    paddingVertical: 25,
    borderRadius: 40,
    fontSize: 16,
    backgroundColor: "#39eb9a",
    marginHorizontal: "auto",
    marginVertical: 5
  }
});

export default Result;