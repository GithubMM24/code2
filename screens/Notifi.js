
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: task }]);
      setTask('');
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter task..."
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.text}</Text>
            <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.taskList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskList: {
    flexGrow: 1,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  taskText: {
    fontSize: 16,
  },
  deleteButton: {
    color: 'red',
  },
});

export default TodoList;




// import React, { useState } from 'react';
// import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

// const TodoList = () => {
//   const [task, setTask] = useState('');
//   const [tasks, setTasks] = useState([]);

//   const handleAddTask = () => {
//     if (task.trim() !== '') {
//       setTasks([...tasks, { id: Date.now(), text: task }]);
//       setTask('');
//       showAlert();
//     }
//   };

//   const handleDeleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   const showAlert = () => {
//     Alert.alert(
//       'Task Added',
//       'Your task has been added to the to-do list!',
//       [{ text: 'OK' }],
//       { cancelable: true }
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>To-Do List</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter task..."
//           value={task}
//           onChangeText={setTask}
//         />
//         <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
//           <Text style={styles.buttonText}>Add</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={tasks}
//         renderItem={({ item }) => (
//           <View style={styles.taskItem}>
//             <Text style={styles.taskText}>{item.text}</Text>
//             <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
//               <Text style={styles.deleteButton}>Delete</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//         keyExtractor={(item) => item.id.toString()}
//         contentContainerStyle={styles.taskList}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginRight: 10,
//   },
//   addButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     justifyContent: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   taskList: {
//     flexGrow: 1,
//   },
//   taskItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#fff',
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   taskText: {
//     fontSize: 16,
//   },
//   deleteButton: {
//     color: 'red',
//   },
// });

// export default TodoList;
