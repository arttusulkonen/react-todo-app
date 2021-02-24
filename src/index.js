import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./components/app-header/app-header";
import SearchPanel from "./components/search-panel/search-panel";
import TodoList from "./components/todo-list/todo-list";
import './index.css'
import ItemStatusFilter from "./components/item-status-filter/item-status-filter";

const App = () => {

    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Learn React', important: true, id: 2},
        {label: 'Make React App', important: false, id:3},
    ]

    return(
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todoData={todoData}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
