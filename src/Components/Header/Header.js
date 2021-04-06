import { Search } from '../Search/Search'; 
import { SubMenu } from "../SubMenu/SubMenu";
import "./Header.css";
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Reddit from '../../Utilities/Reddit';
import redditLogo from "./reddit-logo.png";
import searchIcon from "./search-icon.png";
import {chooseSub, selectSubReddit} from "../../Features/subRedditSlice";

export const Header =()=> {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState(null);
    const [display, setDisplay] = useState(false);
    const subState = useSelector(selectSubReddit);

    //Loads content on page load
    useEffect(()=> {
        Reddit.populateReddit()
        .then( data => setResults(data));
        window.scrollTo(0, 0);
    }, [subState])
    //Loads subReddit from dropdown menu
    const handleSubChange =(e)=> {
        dispatch(chooseSub(e.currentTarget.dataset.sub));
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

    return (
        <div>
            <div className="header">
                <div className="logo clickable" onClick={goHome} data-sub="">
                    <img src={redditLogo} alt="" className="reddit-logo"/>
                    <h1 className="reddit-logo-typed">reddit preview</h1>
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
                <h4 onClick={handleDisplay} className="sub-menu-link">r/subs</h4>
                <h4 onClick={handleDisplay} className="mobile-sub-menu-link">r/</h4>
            </div>
            <SubMenu display={display} handleSubChange={handleSubChange} handleDisplay={handleDisplay}/>
            <Search results={results} handleSubChange={handleSubChange}  
            className="search"/>
        </div>
    )
}