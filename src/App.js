import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from "react" 

function App() {
  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([
    {
        id: 1,
        text:'Learning React Basics',
        date: 'Nov 25th 9:30am',
        reminder:true
    },
    {
        id: 2,
        text:'Learning React Router',
        date: 'Nov 25th 1:30pm',
        reminder:true
    },
    {
        id: 3,
        text:'Learning React Redux',
        date: 'Nov 25th 5:30pm',
        reminder:false
    },
    {
        id: 4,
        text:'Learning React Hooks',
        date: 'Nov 25th 9:30am',
        reminder:true
    },
])
//Delete Task
const deleteTask =(id)=>{
    setTasks(tasks.filter((task)=>(task.id !== id)))
}
//Toggle reminder
const toggleReminder =(id)=>{
  setTasks(tasks.map((task)=>(task.id ===  id ?{...task, reminder:!task.reminder} : task)))
}
//on add
const addTask = ((task) =>{
    const id = Math.floor(Math.random()*1000)+ 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
})
  return (
    <div className="container" >
        <Header onAdd={()=> setShowAddTask(!showAddTask)}  showAdd ={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask}/>}
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
}

export default App;
 