import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {RadioButton} from 'react-native-paper';
import { data } from '../../utils/data';

const Quiz = ({navigation}: any) => {
   const [question, setQuestion] = useState(1);
 
  
 function getRandomQuestion () {
    question.push()

    const RandomNumber = Math.floor.random (1, data.length)

 }
 

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Question</Text>
      <View style={styles.boxforquestion}>
        <Text style={styles.question}>Props are immutable?</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={getRandomQuestion(()=>)}>
      <Text style={styles.buttonText}>Change</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate('TimeUp')}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#b8e5ea',
      width: '100%',
      height: '100%',
    },
  heading: {
    color: '#000000',
    textAlign: 'center',
    marginTop: '20%',
    fontWeight: 'bold',
    fontSize: 35,
  },
  button: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: "20%",
    fontFamily: 'regular',
    fontSize: 18,
    backgroundColor: '#40a420',
    marginTop: '10%',
    paddingLeft: '5%',
    color: 'black',
    padding: '3%',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  question: {
    color: '#000000',
    marginHorizontal: 10,
  },
  boxforradio: {
    marginHorizontal: 4,
    flexDirection: 'row',
  },
  text: {
    color: '#000000',
    marginTop: 8,
  },
  boxforquestion: {
    borderWidth: 1,
    color: 'black',
    padding: 20,
    marginHorizontal: 15,
    marginTop: 20,
  },
});
