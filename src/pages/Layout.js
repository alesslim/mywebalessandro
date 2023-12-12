import { Outlet, Link } from "react-router-dom";

const Layout = () =>{
    return <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">historia</Link>
                </li>
                <li>
                    <Link to="/bailes">bailes</Link>
                </li>
                <li>
                    <Link to="/platos">platos</Link>
                </li>
            </ul>
        </nav>
        <hr/>
        <Outlet/>
    </div>
}

export default Layout;