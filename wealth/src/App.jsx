import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import Notfound from "./pages/Notfound";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import Home from "./pages/Home";
import About from "./pages/About";
import Sponsor from "./pages/Sponsor";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";

import RootLayout from "./layouts/RootLayout";
import User from "./layouts/UserLayout";

    const router = createBrowserRouter(
        createRoutesFromElements( 
        <Route path= "/" element= {<RootLayout />}>
            <Route index element= {<Home />} /> 
            <Route path="about" element = { <About />} />
            <Route path="sponsor" element = { <Sponsor />} />
            <Route path="contact" element = { <Contact />} />
            <Route path="about" element = { <About />} />
            <Route path="terms" element = { <Terms />} />

            <Route path="user" element= {<User />  }> 
            <Route index path= "user" element = {<Sign /> }/>
            <Route path= "log" element= {<Login />} /> 
            </Route>
       
            <Route path= "*" element= {<Notfound />} /> 

        </Route>

        )
    )

    const App = () => {
        return ( 
<RouterProvider router = {router} />
         );
    }
     
    export default App;
     


























