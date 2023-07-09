import React, { useState } from "react";
import './App.css';

function Todo(){
    const [newItem , setNewItem] = useState('');
    const [items,setItem] = useState([]);


    //addItem function
    function addItem() {
        // console.log(newItem);

        if(!newItem){
            alert("Enter the item");
            return;
        }

        const item ={
            id:Math.floor(Math.random() * 1000),
            value:newItem
        };

        setItem(oldList => [...oldList , item]);
        setNewItem('');

        //items in array
        console.log(item)
    }
    function deleteItem(id){
        const newarray = items.filter(item => item.id !== id);
        setItem(newarray);
    }
    const handleKeyPress =(e) =>{
        if(e.key == 'Enter'){
            addItem();
        }
    }

    return(
       
        <div className="todo">
       
        <h1>TODO LIST</h1>
        <table className = "table">
       <input type = "text"  
       value = {newItem}
       onKeyPress={handleKeyPress}
       onChange={ e =>setNewItem(e.target.value)}
       />
       <button className = "button" 
        onClick={addItem}>
        ADD
        </button>

       
       {/*Get all items to display here inside <ul> */}
       <ol>
        {items.map(item => {
            return(
                <div>
                <li key = {item.id}>{item.value}
                <button className = 'delete-button'onClick = { () => deleteItem(item.id)}> X</button>
                </li>
                </div>
            )
        })}
       </ol>
       </table>
       </div>   
    );
}
export default Todo;