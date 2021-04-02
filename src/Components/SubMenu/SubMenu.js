import "./SubMenu.css";

export const SubMenu =(props)=> {
    
    const clickEvent =(e)=> {
        props.handleDisplay();
        props.handleSubChange(e);
        
    }
    
    return (
        <div>
            <div className={props.display ? "show-menu" : "hide-menu"}>
                <div className="sub-link-box">
                <a onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/art/"
                    >r/Art</a>
                </div>
                <div className="sub-link-box">
                <a onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/askreddit/"
                    >r/AskReddit</a>
                </div>
                <div className="sub-link-box">
                <a onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/atlanta/"
                    >r/Atlanta</a>
                </div>
                <div className="sub-link-box">
                <a onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/awww/"
                    >r/awww</a>
                </div>
                <div className="sub-link-box">
                <a onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/creepy/"
                    >r/creepy</a>
                </div>
                <div className="sub-link-box">
                <a onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/dataisbeautiful/"
                    >r/dataisbeautiful</a>
                </div>
                <div className="sub-link-box">
                <a onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/dogs/"
                    >r/dogs</a>
                </div>
                <div className="sub-link-box">
                <a onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/earthporn/"
                    >r/EarthPorn</a>
                </div>
                <div className="sub-link-box">
                <a onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/funny/"
                    >r/funny</a>
                </div>
                <div className="sub-link-box">
                <a onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/food/"
                    >r/food</a>
                </div>
                <div className="sub-link-box">
                <a onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/futurology/"
                    >r/futurology</a>
                </div>
                <div className="sub-link-box">
                <a onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/pics/"
                    >r/pics</a>
                </div>
                <div className="sub-link-box">
                <a onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/lifeprotips/"
                    >r/LifeProTips</a>
                </div>
                <div className="sub-link-box">
                <a onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/natureisfuckinglit/"
                    >r/natureisfuckinglit</a>
                </div>
                <div className="sub-link-box">
                <a onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/pics/"
                    >r/pics</a>
                </div>
            </div>
        </div>

    )
}