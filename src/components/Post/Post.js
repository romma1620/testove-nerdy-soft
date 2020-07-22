import React from "react";
import {Button} from "../Button/Button";


const Post = ({post, ...props}) => {

    return (
        <div className='container flex-row border border-primary m-2'>
            <div className="card-body">
                <h3>
                    {post.title}

                </h3>
                <p className="text">
                    {post.text}

                </p>
                <small className="data">{post.date.toString()}</small>
            </div>
            <div className="block1">
                <p className=" card-text text">
                    {post.name}
                </p>
            </div>
            <Button className='btn btn-primary m-2' onClick={props.deletePost} label='Delete'/>

        </div>


    );
}

export default Post;
