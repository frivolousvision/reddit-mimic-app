import "./SubMenu.css";
import {handleSubChange} from "../Header/Header";

export const SubMenu =(props)=> {
    return (
        <div>
            <div className={props.display ? "show-menu" : "hide-menu"}>
                <a onClick={props.handleSubChange} 
                    className="sub-link"
                    data-sub="r/pics/"
                    >r/pics</a>
                <a onClick={props.handleSubChange} 
                    className="sub-link"
                    data-sub="r/funny/"
                    >r/funny</a>
                <a onClick={props.handleSubChange} 
                    className="sub-link"
                    data-sub="r/natureisfuckinglit/"
                    >r/nature lit</a>
            </div>
        </div>

    )
}