import classes from './NewPostForm.module.css';
import Card from "../ui/Card";
import {useRef, useState} from "react";
import {useAddPostMutation} from "../../api/api";

const NewPostForm = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [addPost, {  isError }] = useAddPostMutation();


    const titleInputRef = useRef();
    const authorInputRef = useRef();


    function submitHandler() {
        // event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredAuthor = authorInputRef.current.value;

        const postData = {
            title: enteredTitle,
            author: enteredAuthor,
        };

        addPost(postData);
        setIsSuccess(true);
    }



    return <Card>
        {isSuccess && <div>Post added successfully!</div>}
        {isError && <div>Error adding post</div>}
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Title</label>
                <input type='text' required id='title' ref={titleInputRef} name='title'/>
            </div>
            <div className={classes.control}>
                <label htmlFor='author'>Author</label>
                <input type='text' required id='author' ref={authorInputRef}/>
            </div>

            <div className={classes.actions}>
                <button>Add Post</button>
            </div>
        </form>
    </Card>
}
export default NewPostForm;