import React, {Component} from 'react';
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
    state={
        items:[],
        item:"",
        id:uuidv4(),
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const newItem={
            id:this.state.id,
            title:this.state.item
        }
        const updateItems=[...this.state.items,newItem]
        this.setState(
            {
                items:updateItems,
                item:"",
                id:uuidv4()
            },()=>{
                console.log(this.state.items)
            })
    }
    handleChange=(e)=>{
        this.setState(
            {
                item:e.target.value
            }
        )
    }
    handleEdit=(id)=>{
        console.log("Edit",id)
    }
    handleDelete=(id)=>{
        console.log("Delete",id)
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 mx-auto mt-5">
                        <TodoInput handleChange={this.handleChange} handleSubmit={this.handleSubmit} item={this.state.item}  />
                        <TodoList items={this.state.items} handleEdit={this.handleEdit} handleDelete={this.handleDelete}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
