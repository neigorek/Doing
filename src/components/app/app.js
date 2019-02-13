import React, {Component} from 'react';
import ToDoList from '../todo-list'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel/'
import AddItem from '../add-item'
import 'bootstrap/dist/css/bootstrap.css'
import './app.css';
import ItemFilter from "../item-filter";



export default class App extends Component {

    id = 0;

    state = {
        todoData: [
            this.createTodoItem('codding'),
            this.createTodoItem('read'),
            this.createTodoItem('dancing'),
            this.createTodoItem('rave')
        ],
        term: '',
        filter: 'all'
    };



    createTodoItem(label) {

        return {
            id: this.id++,
            label,
            important: false,
            done: false
        }

    }

    onFilterChange = (filter) =>{

        this.setState({filter});

    }
    
    onSearchChange = (term) => {
        this.setState({term});
    }


    filter(items, filter){
        switch (filter) {

            case 'all' : return items;

            case 'active' : return items.filter((items) => !items.done);

            case 'done' : return items.filter((items) => items.done);

            default : return items;

        }
    }


    search(items, term){

        if (term.length === 0){
            return items;
        }

        return items.filter((item)=> {

            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;

        })
    }

    deleteItem = (id) => {

        this.setState(({ todoData }) => {

            const idx = todoData.findIndex((el) => el.id === id);

            const newArr = [...todoData.slice(0,idx), ...todoData.slice(idx + 1)];

            return {

                todoData: newArr
            }

        })

}

    addItem = (item) =>{
        this.setState(({todoData})=>{

            const idx = this.id++;

            const newItem = {id: idx, label: item , important: false};

            const newArr = [...todoData, newItem];

            return {
                todoData: newArr
            }
        })
    }

    ToggleProp = (arr, id, propName) =>{

        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];


        const newItem = {...oldItem, [propName]: !oldItem[propName]};


        return [...arr.slice(0,idx), newItem , ...arr.slice(idx + 1)]

    }

    onToggleImportant = (id) => {

        this.setState(({todoData}) => {


            return {

                todoData: this.ToggleProp(todoData, id, 'important')

            }

        }
    )};

    onToggleDone = (id) => {
        this.setState(({todoData}) => {


            return {

                todoData: this.ToggleProp(todoData, id, 'done')

            }



        })
    };

    render() {

        const {todoData, term, filter} = this.state;

        const visibleItems = this.filter(this.search(todoData, term), filter);

        const doneCount = todoData.filter((el) => el.done).length;

        const todoCount = todoData.length - doneCount;


        return (<div className = { 'container' }>

                <AppHeader
                    todo={todoCount}
                    done={doneCount}
                />
                <div className = {'d-flex'}>
                <SearchPanel
                    onSearchChange = {this.onSearchChange}
                />
                <ItemFilter filter = {filter}
                            onFilterChange = {this.onFilterChange}/>
                </div>
                <ToDoList
                    todos = {visibleItems}
                    onDeleted = {this.deleteItem}
                    onToggleImportant = {this.onToggleImportant}
                    onToggleDone = {this.onToggleDone}
                />
                <AddItem
                    onAdd = {this.addItem}
                />
            </div>
        )
    }
}

