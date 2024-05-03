import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/HEADER";
import Body from "./src/components/BODY";


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
                <Body/>
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
