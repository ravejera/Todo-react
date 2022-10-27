import { useState } from "react";


// component holding the todos  props
const Todolist = ({ todos, title, handleDelete }) => {

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className="blog-list">
            <div className="all-blog">
                <h2>{title}</h2>
                <input type="text" placeholder="search..." onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            {todos.filter((todo) => {
                if (searchTerm === "") {
                    return todo;
                } else if (todo.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return todo;
                }
            }).map((todo) => (
                <div className="blog-preview" key={todo.id}>
                    <h2>{todo.title}</h2>
                    <p>{todo.body}</p>
                    <p >Quality is: <span className="quality">{todo.quality}</span></p>
                    <button onClick={() => handleDelete(todo.id)}>delete todo</button>
                </div>
            ))}
        </div>
    );
}

export default Todolist;