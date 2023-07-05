import { NavLink, Outlet } from "react-router-dom";

const User = () => {
    return ( 
        <div>
            <div>
            <ul>
            <li>
            <NavLink to="user">sign in</NavLink>
            </li>

         <li>
         <NavLink to="log"> Login </NavLink>
        </li>
    </ul>
    </div>
    <div>
            <Outlet />
        </div>
        </div>
      
     );
}
 
export default User;