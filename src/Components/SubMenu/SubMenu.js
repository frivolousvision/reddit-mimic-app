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
                    <span onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/art/"
                    >r/Art</span>
                </div>
                <div className="sub-link-box">
                    <span onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/askreddit/"
                    >r/AskReddit</span>
                </div>
                <div className="sub-link-box">
                    <span onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/atlanta/"
                    >r/Atlanta</span>
                </div>
                <div className="sub-link-box">
                    <span onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/awww/"
                    >r/awww</span>
                </div>
                <div className="sub-link-box">
                    <span onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/creepy/"
                    >r/creepy</span>
                </div>
                <div className="sub-link-box">
                    <span 
                        onClick={clickEvent} 
                        className="sub-link"
                        data-sub="r/dataisbeautiful/"
                    >
                        r/dataisbeautiful
                    </span>
                </div>
                <div className="sub-link-box">
                <span onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/dogs/"
                    >r/dogs</span>
                </div>
                <div className="sub-link-box">
                <span onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/earthporn/"
                    >r/EarthPorn</span>
                </div>
                <div className="sub-link-box">
                <span onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/funny/"
                    >r/funny</span>
                </div>
                <div className="sub-link-box">
                <span onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/food/"
                    >r/food</span>
                </div>
                <div className="sub-link-box">
                <span onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/futurology/"
                    >r/futurology</span>
                </div>
                <div className="sub-link-box">
                <span onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/pics/"
                    >r/pics</span>
                </div>
                <div className="sub-link-box">
                <span onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/lifeprotips/"
                    >r/LifeProTips</span>
                </div>
                <div className="sub-link-box">
                <span onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/natureisfuckinglit/"
                    >r/natureisfuckinglit</span>
                </div>
                <div className="sub-link-box">
                <span onClick={clickEvent} 
                    className="sub-link"
                    data-sub="r/pics/"
                    >r/pics</span>
                </div>
            </div>
        </div>

    )
}