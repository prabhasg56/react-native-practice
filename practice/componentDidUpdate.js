import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

const ComponentDidUpdate = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);

    useEffect(()=>{
      console.warn("do some animation");
    }, [count])

    useEffect(()=>{
      console.warn("call some api here");
    }, [data])

  return (
    <View>
        <Text style={{fontSize: 30, marginTop: 30}}> {data} useEffect as componentDidUpdate  {count}</Text>
        <Button title='Update counter' onPress={()=>setCount(count+1)} />
        <Button title='Update counter' onPress={()=>setData(data+1)} />
        <User info = {{data, count}}/>
    </View>
  )
}

const User = (props) => {
  console.log(props.info);
  useEffect(()=>{
    console.warn('run this when data prop is updated');
  }, [props.info.data])
  useEffect(()=>{
    console.warn('run this when count prop is updated');
  }, [props.info.count])
  return(
    <View>
      <Text style={{fontSize:30, color:'orange'}}>
       Data: {props.info.data}
      </Text>
      <Text style={{fontSize:30, color:'orange'}}>
       count: {props.info.count}
      </Text>
    </View>
  )
}

export default ComponentDidUpdate