
// component holding the todos  props
const Todolist = ({todos,title, handleDelete}) => {
    return ( 
        <div className="blog-list">
             <h2>{title}</h2>
            {todos.map((todo) => (
                <div className="blog-preview" key={todo.id}>
                    <h2>{todo.title}</h2>
                    <p>{todo.body}</p>
                    <button onClick={() => handleDelete(todo.id)}>delete todo</button>
                </div>
            ))}
        </div>
     );
}
 
export default Todolist;