import React from 'react';
import ToDoListItem from '../todo-list-item/index'
import './todo-list.css'


const ToDoList = ( { todos } )  => {


    const elments = todos.map((item) => {

        const { id, ...itemProps } = item ;

        return(

            <li key= { id } className={'list-group-item'} >
                <ToDoListItem { ...itemProps }/>
            </li>
        );


    });
    return (
        <ul className = { 'list-group todo-list' } >
            { elments }
        </ul>
    );

}

export default ToDoList;