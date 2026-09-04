function Footer(prop){

    const totalTask = prop.taskList.length

    const completedTask = prop.taskList.filter(task => task.done === true).length

    return(
        <footer>
            {completedTask} of {totalTask} completed
        </footer>
    )
}

export default Footer
