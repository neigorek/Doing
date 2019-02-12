import React from 'react';
import ToDoList from '../todo-list'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel/'
import 'bootstrap/dist/css/bootstrap.css'
const App = () => {

    const todoData = [
        {id: 1, label: 'Drink Coffee', important: false},
        {id: 2,label: 'Codding', important: true},
        {id: 3, label: 'Sleep', important: false}
    ];


    const loginBox = <span>Log in Please</span>;

    const isLoggedIn =  false;

    const wellcome = <span>Vitaemo VAS</span>

    return( <div className={'container'}>
            {isLoggedIn ? wellcome : loginBox }
            <AppHeader />
            <SearchPanel />
            <ToDoList todos = { todoData }  />

        </div>
    )
}
export default App;
