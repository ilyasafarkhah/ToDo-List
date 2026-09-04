function ToDoForm(prop){

    function handleSubmit(e){
        e.preventDefault()
        if(prop.task.trim() === "" || prop.task.length > 100 ){
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
                <button type="submit">submit</button>            
            </label>
        </form>
        
        </>
    )
}

export default ToDoForm
