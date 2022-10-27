import { useState, useEffect } from "react";
import Todolist from './Todolist'
const Home = () => {

    // setting useState
    const [todos, setTodos] = useState([])
    const [isPending, setIsPending] = useState(true)

    // fetching data from json
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/todos')
            .then(res => {
                return res.json()
            })
            .then((data) => {
                console.log(data);
                setTodos(data)
                setIsPending(false)
            })
        }, 500)
    },[])


    // Delete function
    const handleDelete = (id) => {
        const newTodo = todos.filter(todo => todo.id !== id)
        setTodos(newTodo)
    }
    return ( 
        // divs for passing down props to other components
    
        <div className="home">
            {isPending && <div>Loading...</div>}
            {todos && <Todolist todos={todos} title = "ALL TODOS!" handleDelete={handleDelete}/>}

        </div>
     );
}
 
export default Home;