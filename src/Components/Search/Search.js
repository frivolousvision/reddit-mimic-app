import {Results} from '../Results/Results';
import redditLogo from './reddit-logo.png';
import empty from './wow-empty.png';
import './Search.css';


export const Search =(props)=> {

    return (
        <div className="searchResults">
                {!props.results ? <img className="loading" src={redditLogo} alt=""/> :
                    !props.results.data.after ?
                    <img src={empty} alt="" className="empty-image"/> :
                props.results.data ? props.results.data.children.map((child, index) => {
                    return (
                        <Results searchResults={child} key={index}
                        id={index} 
                        handleSubChange={props.handleSubChange} 
                        getComments={props.getComments} 
                        comments={props.comments}
                        showComments={props.showComments} 
                        toggleShowComments={props.toggleShowComments}
                        clearComments={props.clearComments}
                        />
                    )
                }) :
                <img src={empty} alt="" className="empty-image"/>
                }
                
        </div>

    )
}