import React, { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';

const LifeCycleWithUseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.warn("Hello")
    },[])

  return (
    <View>
        <Text style={{fontSize:30, marginTop: 30}}> Life Cycle With useEffect {count}</Text>
        <Button title='UpdateCount' onPress={()=>setCount(count+1)}/>
    </View>
  )
}

export default LifeCycleWithUseEffect