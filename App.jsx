import Header from "./react propject/Header"
import DarkMode from "./react propject/DarkMode"
import ToDoForm from "./react propject/ToDoForm"
import ToDoFilter from "./react propject/ToDoFilter"
import ToDoList from "./react propject/ToDoList"
import Footer from "./react propject/Footer"
import "./react propject/projectstyle.css"
import { useState } from "react"
import { useEffect } from "react"


function App() {

    const [activeTab, setActiveTab]=useState("All")

    const tabs = [
        {value : "All"},
        {value : "Active"},
        {value : "Completed"}
    ]

    function handleFilter(value){
        setActiveTab(value)
    }

    const [done, setDone]=useState(false)

    function handleCompleteTask(id) {
        setTaskList(prev =>
            prev.map(task =>
                (id === task.id ? { ...task, done: !task.done } : task)
            )
        )
    }


    const [task, setTask]=useState("")

    function handleSetTask(e){
        setTask(e.target.value)
    }

    const [taskList, setTaskList] = useState(() => {
        const savedTasks = localStorage.getItem("tasks")

        return savedTasks ? JSON.parse(savedTasks) : []
    })

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(taskList))
    }, [taskList])

    function handleSetList(){
        const newTask = {
            id: crypto.randomUUID(),
            text: task,
            done: false
        }
        setTaskList(prev=>[...prev, newTask]

        )
    }

    const [darkMode, setDarkMode] = useState(true)

    function handleDarkMode() {
        setDarkMode(prev => !prev)
    }


    function DeleteTask(id){
        setTaskList(prev =>
            prev.filter(task => id !== task.id)
        )
    }

    return(
        <container class = {darkMode?"app":"lightMode app"} >
        <header>
            <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} handleDarkMode={handleDarkMode} />
            <Header/>
        </header>
        <main>
            <ToDoForm task={task} setTask={setTask} handleSetTask={handleSetTask} taskList={taskList} handleSetList={handleSetList} />
            <ToDoFilter handleFilter={handleFilter} tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            <ToDoList setActiveTab={setActiveTab} activeTab={activeTab} setDone={setDone} done={done} taskList={taskList} setTaskList={setTaskList} handleSetList={handleSetList} DeleteTask={DeleteTask} handleCompleteTask={handleCompleteTask}  />
        <Footer taskList={taskList} />
        </main>     
        </container>
    )
}

export default App
