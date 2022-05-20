import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState} from 'react';
import AddTask from './components/AddTask';

function App() {
  const [ShowAddTask, setShowAddTask]=useState(false)
  const [tasks, setTasks]=useState([
  {
  id:1,
  text:'Doctor Appointement',
  day:'Feb 5 at 2:30pm',
  remider:true,
},
{ 
  id: 2,
  text: 'Meeting at School',
  day: 'Feb 6th at 1:30pm',
  remider:true,
},
{
  id:3,
  text:'Food Shooping',
  day:'Feb 5th at 2:30pm',
  remider:false,
}
])

//Add Task 
const addTask= (task) => {
  const id = Math.floor(Math.random() * 10000) + 1

  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

//Delete Task
const deleteTask = (id)=>{
  // console.log(id)
  setTasks(tasks.filter((task)=>task.id !== id));

}
// Toggle Reminder Status
const toggleReminder = (id) =>{
  setTasks(
    tasks.map((task)=>task.id === id ? {...task, reminder : !task.reminder } : task))
} 

  return (
    <div className="container">
      <Header onAdd={()=> setShowAddTask(!ShowAddTask)} ShowAdd={ShowAddTask}/>
     {ShowAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length> 0 ? ( <Tasks tasks={tasks} onDelete = {deleteTask} onToggle={toggleReminder}/>):('No task to Show')}
    </div>
  );
}

export default App;
