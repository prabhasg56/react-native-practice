import { Text, View, Button } from "react-native";
import React, { useEffect, useState } from "react";

const ComponentDidUnmount = () => {
  const [show, setShow] = useState(false);

  return (
    <View>
      <Text style={{ fontSize: 30, marginTop: 30 }}>ComponentDidUnmount</Text>
      <Button title="Toggle Component" onPress={() => setShow(!show)} />
      {show ? <Student /> : null}
    </View>
  );
};

const Student = () => {
  let timer = setInterval(() => {
    console.warn("Timer called");
  }, 200);

  useEffect(() => {
    return () => clearInterval(timer);
  });
  
  return (
    <View>
      <Text style={{ fontSize: 20, color: "green" }}>Student Component</Text>
    </View>
  );
};

export default ComponentDidUnmount;
