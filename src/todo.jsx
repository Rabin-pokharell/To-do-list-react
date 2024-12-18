import {useState} from 'react'
import './todo.css'

function ToDoList(){
    const [tasks, setTasks] = useState([]);
    const [inputs, setInputs] = useState('');
    
    function handleInsert(){
        if (inputs.trim !== ''){
            setTasks([...tasks, inputs]);
            setInputs('');
        }
        
    }

    const deleteTask =(index) =>{
        const newTask = tasks.filter((_, i) => i !== index);
        setTasks(newTask);
    }

    document.addEventListener("DOMContentLoaded", () => {
        const input = document.getElementById("input");
        if(input){
            input.addEventListener("keydown", (event) => {
                if(event.key === 'Enter'){
                    handleInsert();
                }
            });
        } else{
            console.error("domcontent not loded")
        }

    });


    return (
        <div className="todoContainer">
            <h1>To-Do-List</h1>

            <div className='inputContainer'>
                <input value={inputs} id="input" type="text" placeholder='Enter your tasks.' onChange={(e) => setInputs(e.target.value)}/>
                <button id='input-button' onClick={handleInsert}>Insert</button>
            </div>
            <div className="inputStore">
                <ul >
                    {tasks.map((task, index) => (
                                            <li key={index}>
                                                {task}
                                                <button onClick={() => deleteTask(index)}>🗑️</button>
                                            </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ToDoList