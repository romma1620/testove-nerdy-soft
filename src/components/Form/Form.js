import React, {Component} from 'react';
import {Button} from "../Button/Button";
import uniqId from 'uniqid';

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            name: ''
        };
    }

    onSubmit = () => {
        const { addPost } = this.props;
        const newPost = {
            ...this.state,
            data: new Date(),
            c: console.log(4)
        };

        console.log(1);

        addPost(newPost);

        this.setState({
            id: uniqId(),
            title: '',
            text: '',
            name: ''
        });
    };

    //
    onLabelChange = e => {
        const { id } = e.target;
        this.setState({
            [id]: e.target.value
        });
    };

    render() {
        const { title, name, text } = this.state;

        return (

            <div className='container-fluid'>
                <h2>Create new Announcement</h2>
                <div className="form-group">
                    <label for="title" className="input-group-text">Enter author name:</label>
                    <input
                        className="form-control"
                        type="text"
                        id="name"
                        onChange={this.onLabelChange}
                        value={name}
                    />
                </div>
                <div className="form-group">
                    <label for="title" className="input-group-text">Enter Announcement title:</label>
                    <input
                        className="form-control"
                        type="text"
                        id="title"
                        onChange={this.onLabelChange}
                        value={title}
                    />
                </div>
                <div className="form-group">
                    <label for="text" className="input-group-text">Enter Announcement text:</label>
                    <textarea
                        className="form-control"
                        name="text-area"
                        id="text"
                        onChange={this.onLabelChange}
                        value={text}
                    />
                </div>
                <Button className="m-1 btn btn-outline-primary" onClick={this.onSubmit} label="Add post"/>
            </div>
        );
    }
}
