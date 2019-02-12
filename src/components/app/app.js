import React, {Component} from 'react';
import ToDoList from '../todo-list'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel/'
import 'bootstrap/dist/css/bootstrap.css'
import './app.css';
export default class App extends Component {

    state = {
        todoData: [
            {id: 1, label: 'Drink Coffee', important: false},
            {id: 2, label: 'Codding', important: true},
            {id: 3, label: 'Sleep', important: false}
        ]
    }


    render() {


        return (<div className={'container'}>

                <AppHeader/>
                <SearchPanel/>
                <ToDoList
                    todos={this.state.todoData}
                    onDeleted={(id) => {
                        console.log('del', id)
                    }}
                />

            </div>
        )
    }
}

