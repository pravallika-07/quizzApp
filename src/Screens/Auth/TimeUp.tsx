import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {RadioButton} from 'react-native-paper';
import {useSelector} from 'react-redux';

const TimeUp = () => {
  const [minutes, setMinutes] = useState(0);
  const [checked, setChecked] = React.useState('first');

  const inputTime = useSelector((store: any) => store.timer);
  let number = +inputTime;

  const [seconds, setSeconds] = useState(number);

  var timer: any;
  useEffect(() => {
    timer = setInterval(() => {
      if (seconds > 0) setSeconds(seconds - 1);

      if (seconds === 59) {
        setMinutes(minutes - 1);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  });
  return (
    <View style={styles.container}>
      <Text style={styles.timeUp}>TimeUp</Text>
      <View style={styles.boxforquestion}>
        <Text style={styles.question}>Props are immutable?</Text>
        <View style={styles.boxforradio}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
          <Text style={styles.text}>True</Text>
        </View>
        <View style={styles.boxforradio}>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
          <Text style={styles.text}>False</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('inputTime')}>
        <Text style={styles.buttonText}>A</Text>
      </TouchableOpacity>
      <View style={styles.counterBox}>
        <Text style={styles.counterText}>
          {minutes} : {seconds}
        </Text>
      </View>
    </View>
  );
};

export default TimeUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b8e5ea',
    width: '100%',
    height: '100%',
  },
  timeUp: {
    color: '#000000',
    textAlign: 'center',
    marginTop: '20%',
    fontWeight: 'bold',
    fontSize: 35,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  counterText: {
    color: '#000000',
  },
  counterBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  button: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#40a420',
    marginHorizontal: '42%',
    marginTop: 10,
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
