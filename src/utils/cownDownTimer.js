import React ,{useState,useRef,useEffect}from 'react';
import {View,  TouchableOpacity,Text } from 'react-native';

const CountDownTimer = (props) => {
    const [time, setTime] = useState(props.initialValue || 10);
    const timerRef = useRef(time);
  
    useEffect(() => {
      const timerId = setInterval(() => {
        timerRef.current -= 1;
        if (timerRef.current < 0) {
          clearInterval(timerId);
        } else {
          setTime(timerRef.current);
        }
      }, 1000);
      return () => {
        clearInterval(timerId);
      };
    }, []);
  
    return ( 
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text> {time} </Text>
      </View>
    )
}

export default CountDownTimer
