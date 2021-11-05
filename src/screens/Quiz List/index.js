import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Camera from '../../components/camera';

const QuizList = ({
  navigation
}) => {
  const startQuiz = () => {
    navigation.navigate('UserPic')
  }
  return(
    <View style={styles.container} >
      <View st>
        <Text style={styles.title}>
          Quiz List
        </Text>
        <Text style={styles.subtitle}>
          Select the Category
        </Text>
      </View>
      <View style={styles.quizContainer} >
        <Text onPress={() => startQuiz()} style={styles.quiz} >
          HTML
        </Text>
        <Text onPress={() => startQuiz()} style={styles.quiz} >
          Javascript
        </Text>
        <Text onPress={() => startQuiz()} style={styles.quiz} >
          Phyton  
        </Text>
        <Text onPress={() => startQuiz()} style={styles.quiz} >
          CSS
        </Text>
      </View>
    </View>
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
    padding: 10,
    textAlign: "center"
  },
  subtitle: {
    width: "100%",
    color: "#7d7d7d",
    fontSize: 16,
    padding: 5,
    textAlign: "center"
  },
  quizContainer: {
    width: "80%",
    marginHorizontal: "auto",
    marginTop: 20
  },
  quiz: {
    height: 60,
    backgroundColor: "#767e80",
    borderRadius: 25,
    marginBottom: 25,
    paddingTop: 20,
    textAlign: "center",
    fontSize: 18,
    color: "white"
  }
});

export default QuizList;