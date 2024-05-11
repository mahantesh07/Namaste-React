import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/HEADER";
import Body from "./src/components/BODY";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";


//React Element
//const jsxHeading=<h1 id="heading" className="headingClassName">Namaste javascript</h1>;

//Component Types 1.Class Component 2.Functional Component

// const Title = () => <h1>Namaste Javascript Component 1</h1>;
// const Heading = () =>(
// <div id="container">
//     <Title/>
//     <h2>Namaste Javascript Component2</h2>
//     </div>
//     )

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */







const AppLayout  = () =>{
    return (
        <div className="app">
                <Header/>
                <Outlet/>
        </div>
    );
};

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            }
            ,{
                path:"/about",
                element:<About/>
            },{
                path : "/contact",
                element : <Contact/>
            },{
                path : "/RestaurantMenu/:resId",
                element : <RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
