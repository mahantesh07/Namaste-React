/* const header=React.createElement("h1",{id:"heading"},"Hello world javascript");
            const root=ReactDOM.createRoot(document.getElementById("root"));
            root.render(header); */

const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"},
[React.createElement("h1",{id:"h1"},"heading 1"),React.createElement("h2",{id:"h2"},"heading 2")]),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{id:"h1"},"heading 1"),React.createElement("h2",{id:"h2"},"heading 2")])
]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);