import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Components from './practice/Component';
import OnPressButton from './practice/ButtonAndOnPress';
import Style from './practice/Style';
import GetTextInputVal from './practice/getTextInputVal';
import SimpleForm from './practice/simpleForm';
import FlatListPractice from './practice/FlatList';
import ListMap from './practice/ListMap';
import GridWithDynamicData from './practice/DynamicGrid';
import FlatListWithLoop from './practice/ListWithLoop';
import SectionListPractice from './practice/SectionList';
import ClassComponent from './practice/ClassComStateProps';
import LifeCycleWithUseEffect from './practice/LifeCycleWithUseEffect';
import ComponentDidUpdate from './practice/componentDidUpdate';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style = {{fontSize: 30}}>Welcome to react native by prabhas!</Text>
//       <Text style = {{fontSize: 20}}>Hello first text component!</Text>
//       <Text style = {{fontSize: 10}}>Hello 2nd component!</Text>
//       <Button title='Press Here'></Button>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

let name = "Prabhakar";
let age = 24;

function fruit() {
  return "Apple";
}

const App = () => {
  return (
    <View>
        {/* <Components/> */}
        {/* <Text style={{fontSize:30,  backgroundColor: 'blue', textAlign: 'center', padding: 5} }> Component 2 </Text>
        <Text style = {{fontSize: 20}}>{name} </Text>
        <Text style = {{fontSize: 20}}> {fruit()} </Text>
        <Text style = {{fontSize: 20}}> {100*3} </Text>
        <Text style = {{fontSize: 20}}> {age ==39 ? "Above 30" : "Unknown age"} </Text> */}
        {/* <OnPressButton/> */}
        {/* <Style/> */}
        {/* <GetTextInputVal/> */}
        {/* <SimpleForm/> */}
        {/* <FlatListPractice/> */}
        {/* <ListMap/> */}
        {/* <GridWithDynamicData/> */}
        {/* <FlatListWithLoop/> */}
        {/* <SectionListPractice/> */}
        {/* <ClassComponent/> */}
        {/* <LifeCycleWithUseEffect/> */}
        <ComponentDidUpdate/>
    </View>
  );
}

export default App;