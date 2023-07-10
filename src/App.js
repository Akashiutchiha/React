import React from "react";
import { ReactDOM } from "react-dom";

function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="Avatar" style={{ width: "10%", height: '20%' }} />
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    )
}

function App() {
        return (
            <div>
                <h1>Hello World!</h1>
                <p>This is a React App</p>
                <Card title='picture' content="small description" img="https://picsum.photos/200/300
"/>
            </div>
        )
    }


    export default App;