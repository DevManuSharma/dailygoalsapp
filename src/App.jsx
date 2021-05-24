import React, { useState } from 'react';
import './App.css';
import Todolist from './Todolist';

const App = () =>{
    const [inputList , setInputList] = useState("");
    const [Items , setItems] = useState([]);
    const itemEvent = (event)=> {
        setInputList(event.target.value);
    };
    
    const listofitems =() =>{
        setItems( (olditems)=> {
         return[...olditems, inputList];
        } );

        setInputList("");
    };

    const deleteItems =(id)=>{
        console.log('deleted');

        setItems((oldItems)=>{
            return oldItems.filter((arrElem , index)=>{
                    return index !== id;
            });
        });
    };
    return <>
    <div className="main_div">
       
        <div className="center_div">
            <br/>
            <h2 >Daily Goals Manager Application</h2>
            <p> Here you can set your daily goals , after completing them you can close your respective goal
              </p>
              <h3>Developer : Manu Sharma</h3>
            <h1>Daily Goals</h1>
            <br />
      <input type="text"  placeholder="Add Goals.." value={inputList} onChange={itemEvent}/>
        <button onClick={listofitems}> + </button>


        <ol>
           {/*<li> {inputList} </li>*/}

          {Items.map( ( itemval , index) => {
           return <Todolist 
           key={index}
            id={index}
           text={itemval} 
           onSelect ={deleteItems}
            />
          })}
        </ol>
         </div>
    </div>

    
    
    </>

};

export default App;