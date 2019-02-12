import React from 'react';
import ToDoListItem from '../todo-list-item/index'
import './todo-list.css'


const ToDoList = ( { todos, onDeleted } )  => {


    const elments = todos.map((item) => {

        const { id, ...itemProps } = item ;

        return(

            <li key= { id } className={'list-group-item'} >
                <ToDoListItem
                    { ...itemProps }
                    onDeleted ={()=> onDeleted(id) }
                />
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