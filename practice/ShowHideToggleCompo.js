import React, { useState } from "react";
import { Text, View, Button } from "react-native";

const ShowHideToggle = () => {
    const [show, setShow] = useState(false)
  return (
    <View>
      <Text style={{ fontSize: 30, marginTop: 30 }}>Show/Hide Component</Text>
      <Button title="Toggle Component" onPress={()=>setShow(!show)}/>
      {
        show ? <User/> : null
      }
    </View>
  );
};

const User = () =>{
    return(
        <View>
            <Text style={{fontSize: 20, color:'green'}}>
                User Component
            </Text>
        </View>
    )
}


export default ShowHideToggle;