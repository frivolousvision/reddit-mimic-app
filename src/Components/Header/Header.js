import { Search } from '../Search/Search'; 
import { SubMenu } from "../SubMenu/SubMenu";
import "./Header.css";
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Reddit from '../../Utilities/Reddit';
import redditLogo from "./reddit-logo.png";
import searchIcon from "./search-icon.png";
import hamburger from './hamburger-clear.png';
import {chooseSub, selectSubReddit} from "../../Features/subRedditSlice";
import {selectFirstChildren, setFirstChildren, setNextChildren} from "../../Features/childrenSlice";
import InfiniteScroll from 'react-infinite-scroll-component';



export const Header =()=> {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState(null);
    const [display, setDisplay] = useState(false);
    const [nextAfter, setNextAfter] = useState('');
    const subState = useSelector(selectSubReddit);
    const childrenArray = useSelector(selectFirstChildren);

    //Loads content on page load
    //useEffect(async ()=> {
    //    const json = await Reddit.populateReddit()
    //    const childVar = await json.data.children
    //    setResults(json)
    //    dispatch(setFirstChildren(childVar))
    //    //setChildrenArray(childVar)
    //    setNextAfter(json.data.after)
    //    //window.scrollTo(0, 0);
    //}, [subState, dispatch])
    useEffect(()=> {
        async function populateReddit() {
        //const state = store.getState();
        const data = await fetch(`https://www.reddit.com/${subState}.json`);
        const jsonData = await data.json();
        const childVar = await jsonData.data.children
        setResults(jsonData)
        dispatch(setFirstChildren(childVar))
        //setChildrenArray(childVar)
        setNextAfter(jsonData.data.after)
        //window.scrollTo(0, 0);
    }
    populateReddit();
    }, [subState, dispatch])

    //Loads subReddit from dropdown menu
    const handleSubChange =(e)=> {
        dispatch(chooseSub(e.currentTarget.dataset.sub));
        window.scrollTo(0, 0);
    }
    //Delete this if it don't work
    const searchSubChange =(term)=> {
        dispatch(chooseSub(term));
        window.scrollTo(0, 0);
    }
    //Gets value from search term
    const handleSearchTerm =(e)=> {
        setSearchTerm(e.target.value);
    }
    //Search all of Reddit or within subReddit
    const handleSubmit =()=> {
        Reddit.searchReddit(searchTerm)
        .then(data => setResults(data));
        setSearchTerm('');
        window.scrollTo(0, 0);
    }
    //Toggles subReddit Menu displaying
    const handleDisplay =()=> {
        if(!display) {
            setDisplay(true);
        }
        else {
            setDisplay(false)
        }
    }
    //Allows search submit via enter key
    const keyPressed =(e)=> {
        if (e.key === "Enter") {
          handleSubmit();
        }
      }
      const goHome =()=> {
        window.location.reload();
     }
    
    //Loads next content for infinte scroll 
    let nextJson;
     const loadMore = async () => {
        if(results.data) {
        nextJson = await Reddit.loadMore(nextAfter);
        const nextJsonArray = await nextJson.data.children;
        const afterVar = await nextJson.data.after
        setNextAfter(afterVar);
        dispatch(setNextChildren(nextJsonArray));
        }}
    
    
    
    return (
        <div>
            <div className="header">
                <div className="logo clickable" onClick={goHome} data-sub="">
                    <img src={redditLogo} alt="" className="reddit-logo"/>
                    <h1 className="reddit-logo-typed">reddit dark</h1>
                </div>

                <div className="input-box">
                    <input
                        type="text"
                        placeholder="search"
                        value={searchTerm}
                        onChange={handleSearchTerm}
                        onKeyPress={keyPressed}
                    />
                    <img src={searchIcon}
                        onClick={handleSubmit}
                        className="search-icon"
                        alt=''
                    />
                </div>
                <h4 onClick={handleDisplay} className="sub-menu-link">r/explore</h4>
                <img onClick={handleDisplay} className="mobile-sub-menu-link" src={hamburger} alt=""/>
            </div>
            <SubMenu display={display} handleSubChange={handleSubChange} searchSubChange={searchSubChange}
            handleDisplay={handleDisplay}/>
           <InfiniteScroll
                dataLength={!results ? null :
                            !results.data ? null : 
                            childrenArray.length} 
                next={loadMore}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                      <b>Yay! You have seen it all</b>
                    </p>
                  }>
                    
        
                    <Search results={results} children={childrenArray} handleSubChange={handleSubChange}  loadMore={loadMore}
                    className="search"/>
            </InfiniteScroll>
        </div>
    )
}