import React from "react";
import ReactDOM from "react-dom/client";

//React Element
//const jsxHeading=<h1 id="heading" className="headingClassName">Namaste javascript</h1>;

//Component Types 1.Class Component 2.Functional Component

const Title = () => <h1>Namaste Javascript Component 1</h1>;
const Heading = () =>(
<div id="container">
    <Title/>
    <h2>Namaste Javascript Component2</h2>
    </div>
    )
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);
