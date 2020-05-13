import React, {Component} from 'react';

class TodoInput extends Component {
    render() {
        const {item,handleChange,handleSubmit}=this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <input type="text" className="form-control" placeholder="Enter a item" onChange={handleChange} value={item}/>
                        <button type="submit" className="btn btn-success btn-block mt-3">Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TodoInput;
