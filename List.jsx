function ToDoList(prop){

    let finalResult;
    
    if (prop.activeTab === "All"){
        finalResult = prop.taskList}

    if (prop.activeTab === "Active"){
        finalResult = prop.taskList.filter(task => task.done === false)
    }

    if (prop.activeTab === "Completed"){
        finalResult = prop.taskList.filter(task => task.done === true)
    }

    finalResult = finalResult.map((task)=>
                <div className="listitem" key={task.id}>
                    <button className = {task.done ? "circle done" : "circle"}  onClick={()=>prop.handleCompleteTask(task.id)}></button>
                    <span className={task.done ? "tasktext textdone" : "tasktext"}>
                        {task.text}
                    </span>
                    <button className="deletebtn" onClick={()=>prop.DeleteTask(task.id)} >
                        <svg
                            width="20px"
                            height="20px"
                            viewBox="17 16 22 26"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#fff"
                            >
                            <path
                                fill-rule="evenodd"
                                d="M36 26v10.997c0 1.659-1.337 3.003-3.009 3.003h-9.981c-1.662 0-3.009-1.342-3.009-3.003v-10.997h16zm-2 0v10.998c0 .554-.456 1.002-1.002 1.002h-9.995c-.554 0-1.002-.456-1.002-1.002v-10.998h12zm-9-5c0-.552.451-1 .991-1h4.018c.547 0 .991.444.991 1 0 .552-.451 1-.991 1h-4.018c-.547 0-.991-.448-.991-1zm0 6.997c0-.551.444-.997 1-.997.552 0 1 .453 1 .997v6.006c0 .551-.444.997-1 .997-.552 0-1-.453-1-.997v-6.006zm4 0c0-.551.444-.997 1-.997.552 0 1 .453 1 .997v6.006c0 .551-.444.997-1 .997-.552 0-1-.453-1-.997v-6.006zm-6-5.997h-4.008c-.536 0-.992.448-.992 1 0 .556.444 1 .992 1h18.016c.536 0 .992-.448.992-1 0-.556-.444-1-.992-1h-4.008v-1c0-1.653-1.343-3-3-3h-3.999c-1.652 0-3 1.343-3 3v1z"
                            />
                        </svg>
                    </button>
                </div>
    );

    return(
        <>
        {finalResult}
        </>
    )
}

export default ToDoList
