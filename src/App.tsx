import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {Button} from "./componets/Button";

function App() {


    const tasks1 = [
        {id: 1, title: "HTML&CSS", isDone: true}, //0
        {id: 2, title: "JS", isDone: true}, //1
        {id: 3, title: "ReactJS", isDone: false} //2
    ]
    const tasks2 = [
        {id: 1, title: "Hello world", isDone: true},
        {id: 2, title: "I am Happy", isDone: false},
        {id: 3, title: "Yo", isDone: false}
    ]


    const Button1foo = (name: string, age: number) => {
        console.log(name, age)
    }

    const Button2foo = (name: string) => {
        console.log(name)
    }


    return (
        <div className="App">
            <Todolist title={'What to learn 01'} tasks={tasks1}/>
            <Todolist title={'What to learn 02'} tasks={tasks2}/>
            <Button name={'UI-1'} callBack={() => Button1foo('solona', 21)}/>
            <Button name={'UI-2'} callBack={() => Button2foo('bitcoin')}/>
        </div>
    );
}

export default App;
