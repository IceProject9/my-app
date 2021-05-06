import React from 'react';
import './post-add-form.css';


const PostAddForm = () => {
    return (
        <form className = "bottom-panel d-flex ">
            <input
                type = "text"
                palceholder = "О чём вы думаете сейчас?"
                className = "form-control new-post-lable"
            />
            <button
                type = "submit"
                className = "btn-outline-secondary">
            Добавить</button>
        </form>
       
    )
}

export default PostAddForm;