import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const[taskItems,setTaskItems] = useState([]);

  const onAddTask = () => {
    taskItems.push(task);
    setTaskItems(taskItems);
    console.log(taskItems);
    setTask(null);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        <View style={styles.items}>
          {
            taskItems.map((item,index)=>{
              return <Task key={index} text={item}  />
            })
          }
        </View>
      </View>
      <KeyboardAvoidingView
        // behavior={platform==='ios'?'padding':'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.textInput}
          placeholder={"write a task"}
          onChange={e => setTask(e.target.value)} />
        <TouchableOpacity onPress={() => onAddTask()}>
          <Text>add task</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(199 ,224, 255)',
  },
  tasksWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 20
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 250,
    borderRadius: 10,
    backgroundColor: 'white'
  }

});
