import React from "react"


type ButtonType = {
    name: string
    callBack: ()=>void
}

export const Button = (props:ButtonType) => {
    const secondSubscriber = () => {
        console.log('beka')
    }

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <div>
            {/*<button onClick={secondSubscriber}>click</button>*/}
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    )
}