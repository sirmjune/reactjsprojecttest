import classes from './NewPostForm.module.css';
import Card from "../ui/Card";
import {useRef, useState} from "react";

const NewPostForm = (props) => {
    const [file, setFile] = useState(null);

    const nameInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const phoneInputRef = useRef();
    const descriptionInputRef = useRef();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
    }

    function submitHandler(event) {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        // const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const sureData = {
            name: enteredName,
            image: file,
            address: enteredAddress,
            phone_number: enteredPhone,
            description: enteredDescription
        };

        props.addSure(sureData);
    }



    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Title</label>
                <input type='text' required id='title' ref={nameInputRef} name='title'/>
            </div>
            <div className={classes.control}>
                <label htmlFor='author'>Author</label>
                <input type='text' required id='author' ref={addressInputRef}/>
            </div>

            <div className={classes.actions}>
                <button>Add Post</button>
            </div>
        </form>
    </Card>
}
export default NewPostForm;