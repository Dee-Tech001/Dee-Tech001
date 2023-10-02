import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import Notfound from "./pages/Notfound";
import Login from "./pages/Login";
// import SignupForm from "./pages/SignupForm";
import Home from "./pages/Home";
import About from "./pages/About";
import DashBoard from "./pages/DashBoard";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import BuyCoupon from "./pages/BuyCoupon";
import TopEarners from "./pages/TopEarners"
import Affilliate from "./pages/Affilliate"

import RootLayout from "./layouts/RootLayout";

// import { UserProvider } from "./UserContext";


import PrivateRoute from './PrivateRoute'; // Import the PrivateRoute component
import { AuthProvider } from "./AuthContext";
import Reward from "./pages/Reward";
import Refer from "./refer";
import Card from "./pages/card";
import Withdraw from "./pages/withdraw";
import Advert from "./pages/Advert";
import SignupForm from "./pages/SignupForm";




    const router =   createBrowserRouter(
      
        createRoutesFromElements( 
         
        <Route path= "/" element= {<RootLayout />}>
        
            <Route index element= {<Home />} /> 

         
            <Route path="dashboard" element={<PrivateRoute element={<DashBoard />} />} />
            <Route  path="reward" element= {<Reward /> } />
            <Route path="contact" element = { <Contact />} />
            <Route path="about" element = { <About />} />
            <Route path="terms" element = { <Terms />} />
            <Route path="Buy" element = {<BuyCoupon /> } />
            <Route path="top" element = {<TopEarners /> } />
            <Route path="affi" element = {<Affilliate /> } />
            <Route path="refer" element = {<Refer />} />
            <Route path="card" element = {<Card />} />
            <Route path="withdraw"  element = {<Withdraw /> } />
            <Route path="placeadvert"  element = {<Advert /> } />
            <Route path="signup"  element = {<SignupForm /> } />
            

    
            <Route path="log" element={<Login />} />

            
{/* <Route path="signup" element={<SignupForm />} /> */}

        
            <Route path= "*" element= {<Notfound />} /> 

        </Route>
      

        )
       
        
    )

    const App = () => {
        
        return ( 
            <AuthProvider>
        

            <RouterProvider router = {router} />
            
            
            </AuthProvider>


         );
    }
     
    export default App;
     


























