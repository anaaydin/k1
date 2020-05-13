import React, {Component} from 'react';
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
    state={
        items:[],
        item:""
    }
    handleSubmit=e=>{
        e.preventDefault();
        const newItem={
            title:this.state.item
        }
        const updateItems=[...this.state.items,newItem]
        this.setState(
            {
                items:updateItems,
                item:"",
            },()=>{
                console.log(this.state.items)
            })
    }
    handleChange=e=>{
        this.setState(
            {
                item:e.target.value
            }
        )
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 mx-auto mt-5">
                        <TodoInput handleChange={this.handleChange} handleSubmit={this.handleSubmit} item={this.state.item} />
                        <TodoList/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
