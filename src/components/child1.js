import React from 'react';

export default function Child1 (props){
    return (
        <div> this is child 1 {props.propName} </div>
    )
}

export function SubChild1 (props){
    return (
        <div> this is sub child 1 </div>
    )
}

export class ClassChild1 extends React.Component{
    render(){
        return (
            <div> this is sub child 1 </div>
        )
    }
}