import React, { useEffect, useState, Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`10/01/${year}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;

}
const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

useEffect(() => {
  const timer=setTimeout(() => {
    setTimeLeft(calculateTimeLeft());
    setYear(new Date().getFullYear());
  }, 1000);
  // Clear timeout if the component is unmounted
  return () => clearTimeout(timer);
});

const timerComponents = [];

Object.keys(timeLeft).forEach((interval) => {
  if (!timeLeft[interval]) {
    return;
  }

  timerComponents.push(
    <span>
      {timeLeft[interval]} {interval}{" "}
    </span>
  );
});
export default class SleepScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.titleContainer}>
            Did You Know:
          </Text>
          <Text style={styles.textContainer}>
        "If it takes you less than five minutes to fall asleep at night, you’re probably sleep-deprived. Ideally, falling asleep should take 10 to 15 minutes."
          </Text>
          <Text style={styles.textContainer}>
        "Have trouble waking up on Monday morning? Blame “social jet lag” from your altered weekend sleep schedule."
          </Text>
            <Text style={styles.textContainer}>
        "Today, 75% of us dream in color. Before color television, just 15% of us did."
          </Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text>
              START
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#6fc0b8',
    flex:1
  },
  textContainer:{
    textAlign:"center",
    marginBottom:15,
    fontSize:17,
    paddingLeft:22,
    paddingRight:22,
    fontWeight:"bold",
    color : '#153c4e'
  },
  titleContainer:{
    textAlign:"center",
    alignItems:'center',
    marginBottom:40,
    marginTop: 20,
    fontSize:40,
    fontWeight:"bold",
    textDecorationLine: 'Underline',
    color : '#153c4e'
  },
  buttonContainer:{
    borderRadius:1,
    alignItems:'center,'
  }
})