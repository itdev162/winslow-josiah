import React, { useState } from "react";
import axios from "axios";
import uuid from "uuid";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const CreatePost = ({ onPostCreated }) => {
    let navigate = useNavigate();
    const [postData, setPostData] = useState({
        title: "",
        body: ""
    });
    const { title, body } = postData;

    const onChange = e => {
        const { name, value } = e.target;

        setPostData({
            ...postData,
            [name]: value
        });
    };

    const create = async () => {
        if (!title || !body) {
            console.log("Title and body are required");
        } else {
            const newPost = {
                id: uuid.v4(),
                title: title,
                body: body,
                date: moment().toISOString()
            };

            try {
                const config = {
                    headers: {
                        "Content-Type": "application/json"
                    }
                };

                // Create the post
                const body = JSON.stringify(newPost);
                const res = await axios.post(
                    "http://localhost:5000/posts",
                    body,
                    config
                );

                // Call the handler and redirect
                onPostCreated(res.data);
                navigate(`/`);
            } catch (error) {
                console.error(`Error creating post: ${error.response.data}`);
            }
        }
    }

    return (
        <div className="form-container">
            <h2>Create New Post</h2>
            <input
                name="title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => onChange(e)}
            />
            <textarea
                name="body"
                cols="30"
                rows="10"
                value={body}
                onChange={e => onChange(e)}
            />
            <button onClick={() => create()}>Submit</button>
        </div>
    );
};

export default CreatePost;