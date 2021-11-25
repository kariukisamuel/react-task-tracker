import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState ,useEffect} from "react" 

function App() {
  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([])

  //use effect

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])
  // Fetch Tasks
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:8000/tasks')
      const data = await res.json()
      console.log(data)
      return data
    }
// Fetch Task
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()

        return data
      }
  // add tasks
    const addTask = async (task) =>{
      const res = await fetch('http://localhost:8000/tasks',{
        headers:{
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(task)
      })
      const data = await res.json()
      setTasks([...tasks, data])
    
      // const id = Math.floor(Math.random()*1000)+ 1
      // const newTask = {id, ...task}
      // setTasks([...tasks, newTask])
    }
  //update task

  //Delete Task
    const deleteTask = async(id)=>{
        const res = await fetch(`http://localhost:8000/tasks/${id}`,{
           method: 'DELETE'
        })
        //We should control the response status to decide if we will change the state or not.
        res.status === 200
          ? setTasks(tasks.filter((task) => task.id !== id))
          : alert('Error Deleting This Task')
    }
  //Toggle reminder
    const toggleReminder = async (id) => {
      const taskToToggle = await fetchTask(id)
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updTask),
      })

      const data = await res.json()

      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, reminder: data.reminder } : task
        )
      )
    }

    return (
      
      <div className="container" >
          <Header onAdd={()=> setShowAddTask(!showAddTask)}  showAdd ={showAddTask}/>
          {showAddTask && <AddTask onAdd={addTask}/>}
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      </div>
    );
  }

export default App;
 