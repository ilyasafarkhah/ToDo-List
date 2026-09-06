function ToDoForm(prop){

    const avalibleTasks = prop.taskList.map(task => task.text);

    function handleSubmit(e){
        e.preventDefault()
        if(prop.task.trim() === "" || prop.task.length > 100 ){
            return
        }

        const isDuplicate = avalibleTasks.some(task =>
            task.trim() === prop.task.trim()
        )

        if (isDuplicate){
            return
        }
      
        prop.handleSetList()
        prop.setTask("")
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label className="maininput">
                <input type="text" 
                value={prop.task} 
                onChange={prop.handleSetTask} 
                placeholder="Add a new task..." />
                <button type="submit"><span className="txt" >Submit</span></button>            
            </label>
        </form>       
        </>
    )
}

export default ToDoForm
