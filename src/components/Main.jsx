import { useState } from "react";

export  function Main(){

    const [task,setTask] = useState('')
    const [list,setList] = useState([])
    const [isEditing,setIsEditing] = useState(null)
    const [quantity,setQuantity] = useState(0)
    const [sortBy ,setSortBy] = useState('input')
    let sortedItems;
    if (sortBy === 'input'){
        sortedItems = list
    }
    if (sortBy === 'packed'){
        sortedItems = list.slice().sort((a,b)=>Number(a.packed) - Number(b.packed))
    }




     function AddTask(){
        if (isEditing !== null){
            const updateTask = [...list]
            updateTask[isEditing] = task
            setList(updateTask)
        }else{
            setList([...list,task])
           setQuantity((q)=>q+1)
        }
        setTask('')
     }

     function FormSubmit(e){
        e.preventDefault()
     }

     function DeleteTask(index){
        setList(list.filter((_,i)=> i !== index))
        setQuantity((q)=>q-1)
     }
     function EditTask(index){
        setIsEditing(index)
        setTask(list[index])
     }
     function Checked(){
        document.getElementById('items').style.textDecoration =
        document.getElementById('items').style.textDecoration === 'line-through' ? "" : 'line-through'
     }

    return(
        <div className="contain">
            <div className="Selection">
                <select name="" id="">
                    {[...Array(20)].map((_,index)=>
                    <option value={index+1}>
                        {index+1}
                    </option>
                    )}
                </select>
            </div>
            <form onSubmit={FormSubmit}>
                <div class="container h-100">
                    <div class="d-flex justify-content-center h-100">
                        <div class="search">
                            <input class="search_input" type="text" name="" placeholder="Search here..." value={task} onChange={(e)=>setTask(e.target.value)}/>
                            <button href="go" class="search_icon" onClick={() => task ? AddTask() : alert('Enter something')}>Add</button>
                        </div>
                    </div>
                </div>
            </form>
            <div class="row">
                <div class="col-md-12">
                     <div class="main-todo-input-wrap">
                        <div class="main-todo-input fl-wrap todo-listing">
                            <ul id="list-items"></ul>
                        </div>
                    </div>
                            
                 </div>
                        
            </div>
            <div className="TaskList">
                    <ul>
                        {sortedItems.map((t,index)=> 
                        <li key={index} id="items">
                            {t}
                            <div id="BTN">
                                <button onClick={() => EditTask(index)}><i className="fa-solid fa-pen-to-square search_icon"></i></button>
                                <button onClick={()=>Checked()}><i class="fa-solid fa-check"></i></button>
                                <button onClick={() => DeleteTask(index)}><i className="fa-solid fa-trash search_icon"></i></button>
                            </div>

                        </li>
                        )}
                    </ul>
                    
            </div>
            <div id="sortBy">
                        <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
                            <option value="sorted">Sort by Input</option>
                            <option value="packed">Sort by Packed</option>
                        </select>
            </div>
            <div className="footer">
                      <span id="quan"> total item: {quantity}</span>  
            </div>
        </div>
    );
}