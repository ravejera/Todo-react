import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {


    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate();
    // preventing the page from restarting by adding prevent default
    const handleSubmit = (e) => {
        e.preventDefault()
        const todo = { title, body }
        setIsPending(true)

        // sending post request to json server
        setTimeout(() => {
            fetch(' http://localhost:8000/todos', {
                method: 'POST',
                headers: { "content-type": "application/json" },
                body: JSON.stringify(todo)
            }).then(() => {
                console.log('new blog added')
                setIsPending(false)
                navigate('/');
            })
        }, 1000)

    }
    return (
        <div className="create">
            <h2>Add a new Todo!</h2>
            <form onSubmit={handleSubmit}>
                <label>Todo title:</label>
                <input type="text"
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label>Todo body:</label>
                <textarea
                    required
                    value={body}
                    onChange={e => setBody(e.target.value)}
                ></textarea>
                {!isPending && <button>Add todo</button>}
                {isPending && <button disabled>Adding todo...</button>}
            </form>
        </div>
    );
}

export default Create;