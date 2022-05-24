import React, {useState} from "react";

type TodolistPropsType = {
    title: string
    tasks: Array<TaskPropsType>
}

type TaskPropsType = {
    id: number,
    title: string,
    isDone: boolean
}

export const Todolist = (props: TodolistPropsType) => {

    const firstSubscriber = () => {
        console.log('hi man')
    }

    const onClickHandler = (name: string) => {
        console.log(name)
    }

    const foo1 = (number: number) => {
        console.log(number)
    }

    const foo2 = () => {
        let n  = 100200
        console.log(n)
    }
    
    let [a, setA] = useState(1)

    const onClickPLus = () => {
        setA(++a);
        console.log(a)
    }

    const onClickMinus = () => {
        setA(--a);
        console.log(a)
    }

    const onClickZero = () => {
        setA(0);
        console.log(a)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((obj, index) => {
                    return (
                        <li key={obj.id}>
                            <span>{obj.title}</span>
                            <span>{obj.isDone}</span>
                        </li>
                    )
                })}
                <li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>
            </ul>
            <div>

                <button onClick={(event) => {
                    console.log('ji')
                }}>All</button>
                <button onClick={firstSubscriber}>All</button>
                <button onClick={(event) =>onClickHandler('beka')}>Active</button>
                <button onClick={(event) =>onClickHandler('solona')}>Completed</button>
            </div>

            <div>
                <button onClick={(event => foo1(5000))}>1</button>
                <button onClick={foo2}>2</button>
            </div>

            <div>
                <h1>{a}</h1>
                <button onClick={onClickPLus}>+</button>
                <button onClick={onClickMinus}>-</button>
                <button onClick={onClickZero}>0</button>
            </div>
        </div>
    );
}