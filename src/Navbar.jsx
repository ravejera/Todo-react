import { Link } from "react-router-dom";


// component for narvigating to the other page
const Navbar = () => {


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