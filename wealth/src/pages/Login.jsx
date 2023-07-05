import { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState ('mario')
    if(!user) {
        return <Navigate to="/" />
    }
    return (  <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto pariatur odio, qui exercitationem ut reiciendis quisquam, fugiat repudiandae possimus aliquam similique, repellat ipsam corrupti esse animi porro soluta ullam.
   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium error quidem voluptatem esse libero distinctio, saepe facere quasi nostrum, itaque tempora consequatur reprehenderit temporibus? Eveniet veritatis beatae labore eligendi quod!</p>
   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium error quidem voluptatem esse libero distinctio, saepe facere quasi nostrum, itaque tempora consequatur reprehenderit temporibus? Eveniet veritatis beatae labore eligendi quod!</p>
   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium error quidem voluptatem esse libero distinctio, saepe facere quasi nostrum, itaque tempora consequatur reprehenderit temporibus? Eveniet veritatis beatae labore eligendi quod!</p>
   <button onClick={()=> setUser(null)}>logout</button>
    </div>);
}
 
export default Login;