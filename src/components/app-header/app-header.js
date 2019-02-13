import React from 'react'
import './app-header.css'
const AppHeader  = ({todo, done}) => {




        return (
            <div className={'d-flex'}>
                <h1 className={'head'}>ToDoList</h1>
                <p className={'text-monospace'}>{todo}more todo, {done} done.</p>

            </div>
        )

}
export default AppHeader;