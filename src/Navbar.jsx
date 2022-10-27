import { Link } from "react-router-dom";


// component for narvigating to the other page
const Navbar = () => {

// search bar component incase it doesnt work

    // import { useState } from "react";

    // const SearchBar = ({todos}) => {
    
    //     const [searchTerm, setSearchTerm] = useState('')
    //     return ( 
    //         <div className="search">
    //             <input type= "text" placeholder= "search..." onChange={(e) => setSearchTerm(e.target.value)}/>
    //         {todos.filter((val) => {
    //             if(searchTerm === ""){
    //                 return val;
    //             } else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
    //                 return val;
    //             }
    //         }).map(todo => {
    //                 return <p>{todo.title}</p>
    //             })}
    //         </div>
    //      );
    // }
     
    // export default SearchBar;
    return (
        <nav className="navbar">
            <h1>The Todos</h1>
            <div className="links">
                <Link to="/">
                    Home
                </Link>
                <Link to="/create">
                    New todo
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;