import {Link} from "react-router-dom";
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Posts</div>
            <nav>
                <ul>
                    <li><Link to="/">All Data</Link></li>
                    <li><Link to="add"> + Data</Link></li>

                </ul>
            </nav>
        </header>
    );
}
export default MainNavigation;