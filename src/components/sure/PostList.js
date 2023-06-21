import classes from "./PostList.module.css";
import PostItem from "./PostItem";

const PostList = (props) => {
    return <ul className={classes.list}>

        {props.items?.map(item => (
            <PostItem
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                address={item.address}
                description={item.description}
                phone_number={item.phone_number}
            />))}
    </ul>
}
export default PostList;