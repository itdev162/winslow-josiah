import React from "react";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";
import "./styles.css";

const PostListItem = props => {
    const { post, clickPost, deletePost } = props;
    const navigate = useNavigate();

    const handleClickPost = post => {
        const slug = slugify(post.title, { lower: true });

        clickPost(post);
        navigate(`/posts/${slug}`);
    };

    return (
        <div>
            <div className="postListItem" onClick={() => handleClickPost(post)}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
            <div className="postControls">
                <button onClick={() => deletePost(post)}>Delete</button>
            </div>
        </div>
    );
};

export default PostListItem;