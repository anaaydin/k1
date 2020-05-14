import React, {Component} from 'react';
import TodoItem from "./TodoItem";

class TodoList extends Component {
    render() {
        const {items,handleDelete,handleEdit} = this.props
        return (
            <ul className="list-group">
                {items.map(item => {
                    return (
                        <TodoItem key={item.id} title={item.title} handleDelete={()=>handleDelete(item.id)} handleEdit={()=>handleEdit(item.id)}/>
                    )
                })}
            </ul>
        );
    }
}

export default TodoList;