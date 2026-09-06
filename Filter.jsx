function ToDoFilter(prop){

    return(
        <section className="filtertabs">
            {prop.tabs.map((tab)=>
            <button className= {prop.activeTab===tab.value ? "txt btn selectedfilter":"txt btn"} key={tab.value} onClick={()=>prop.handleFilter(tab.value)} >{tab.value}</button>
            )}
        </section>        
    )
}

export default ToDoFilter
