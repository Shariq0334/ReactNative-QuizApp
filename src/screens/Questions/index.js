import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';

const Questions = ({
  navigation
}) => {
  const [timer, setTimer] = useState(300);
  setTimeout(() => {
    setTimer(timer - 1);
  }, 1000)
  return(
    <ScrollView>
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Questions
        </Text>
        <Text style={styles.timer} >
          {timer}
        </Text>
        <Text style={styles.subtitle}>
          Question 1
        </Text>
        <Text style={styles.question}>
          Choose the correct answer
        </Text>
      </View>
      <View style={styles.optionsContainer}>
        <Text style={styles.option}>
          HTML  
        </Text>
        <Text style={styles.option}>
          CSS
        </Text>
        <Text style={styles.option}>
          Javascript
        </Text>
        <Text style={styles.option}>
          Phyton
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Result')} activeOpacity={0.7}>
          <Text style={styles.button}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container : {
      backgroundColor: "black"
  },
  title: {
    width: "100%",
    color: "white",
    fontSize: 45,
    textAlign: "center",
    marginBottom: 10
  },
  timer: {
    width: "20%",
    marginHorizontal: "auto",
    borderRadius: 20,
    color: "#fff",
    fontSize: 16,
    padding: 5,
    textAlign: "center",
    backgroundColor: "#39eb9a"
  },
  subtitle: {
    width: "100%",
    color: "white",
    fontSize: 16,
    padding: 5,
    textAlign: "center"
  },
  question: {
    width: "100%",
    color: "#7d7d7d",
    fontSize: 16,
    padding: 5,
    textAlign: "center"
  },
  optionsContainer: {
    width: "80%",
    marginHorizontal: "auto",
    marginTop: 20
  },
  option: {
    height: 60,
    backgroundColor: "#767e80",
    borderRadius: 25,
    marginBottom: 25,
    paddingTop: 20,
    textAlign: "center",
    fontSize: 18,
    color: "white"
  },
  buttonContainer: {
    width: "85%",
    marginHorizontal: "auto",
    marginTop: 10,
    marginBottom: 20
  },
  button: {
    width: "100%",
    height: 70,
    textAlign: "center",
    color: "#fff",
    paddingVertical: 25,
    borderRadius: 40,
    fontSize: 16,
    backgroundColor: "#39eb9a"
  }
});

export default Questions;