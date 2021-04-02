import { Search } from '../Search/Search'; 
import { SubMenu } from "../SubMenu/SubMenu";
import "./Header.css";
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Reddit from '../../Utilities/Reddit';
import redditLogo from "./reddit-logo.png";
import {chooseSub, selectSubReddit} from "../../Features/subRedditSlice";

export const Header =()=> {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState(null);
    const [display, setDisplay] = useState(false);
    const subState = useSelector(selectSubReddit);

    useEffect(()=> {
        Reddit.populateReddit()
        .then( data => setResults(data));
    }, [subState])
    
    const handleSubChange =(e)=> {
        dispatch(chooseSub(e.currentTarget.dataset.sub))
    }

    const handleSearchTerm =(e)=> {
        setSearchTerm(e.target.value)
    }
    
    const handleSubmit =()=> {
        Reddit.searchReddit(searchTerm)
        .then(data => setResults(data));
        setSearchTerm('');
    }
    const handleDisplay =()=> {
        if(!display) {
            setDisplay(true);
        }
        else {
            setDisplay(false)
        }
    }

    return (
        <div>
            <div className="header">
                <div className="logo clickable" onClick={handleSubChange} data-sub="">
                    <img src={redditLogo} alt="" className="reddit-logo"/>
                    <h1>reddit mimic</h1>
                </div>

                <div className="input-box">
                    <input
                        type="text"
                        placeholder="search"
                        value={searchTerm}
                        onChange={handleSearchTerm}
                    />

                    <input
                        type="submit"
                        value="search"
                        onClick={handleSubmit}
                    />
                </div>
                <h4 onClick={handleDisplay} className="sub-menu-link">r/subs</h4>
            </div>
            <SubMenu display={display} handleSubChange={handleSubChange}/>
            <Search results={results} className="search"/>
        </div>
    )
}