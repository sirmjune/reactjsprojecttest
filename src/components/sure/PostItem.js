import classes from "./PostItem.module.css";
import Card from "../ui/Card";

const PostItem =(props)=>{
    return <li className={classes.item}>
        <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.name}/>
        </div>
        <div className={classes.content}>
            <h3>{props.name}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
            <p>{props.phone_number}</p>
        </div>
        <div className={classes.actions}>
            <button>Comment</button>
        </div>
        </Card>
    </li>

}
export default PostItem;