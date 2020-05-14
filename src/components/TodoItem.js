import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit,faTrash} from "@fortawesome/free-solid-svg-icons";

class TodoItem extends Component {
    render() {
        const {title,handleEdit,handleDelete} = this.props;
        return (
            <li className="list-group-item  justify-content-between align-items-center">
                <div className="d-flex ">
                    <div className="p-2 flex-grow-1"><h6 className="text-center">{title}</h6></div>
                    <div className="p-2 ">
                        <span className="text-success" onClick={handleEdit}>
                        <FontAwesomeIcon icon={faEdit} />
                    </span>
                    </div>
                    <div className="p-2 ">
                        <span className="text-danger" onClick={handleDelete}>
                        <FontAwesomeIcon icon={faTrash}/>
                    </span>
                    </div>
                </div>
            </li>
        );
    }
}

export default TodoItem;