import React from "react";
import ReactDOM from "ReactDOM/client";

function Hello (prods) {
    return <h1>Hello World</h1>
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Hello />);

//console.log(container)