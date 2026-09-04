function ToDoFilter(prop){

    return(
        <section className="filtertabs">
            {prop.tabs.map((tab)=>
            <button className= {prop.activeTab===tab.value ? "btn selectedfilter":"btn"} key={tab.value} onClick={()=>prop.handleFilter(tab.value)} >{tab.value}</button>
            )}
        </section>        
    )
}

export default ToDoFilter
