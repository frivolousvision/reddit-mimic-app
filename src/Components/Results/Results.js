import './Results.css'
import redditLogo from './reddit-logo.png';
//import { arrowAltUp } from "@fortawesome/free-solid-svg-icons";


export const Results =(props)=> {
    
    //const posted = props.searchResults.data.created_utc;
    
    let upVotes;
    if((props.searchResults.data.ups - props.searchResults.data.downs) > 1000) {
         upVotes = (props.searchResults.data.ups - props.searchResults.data.downs) / 1000
         upVotes = upVotes.toFixed(1);
    } else{
         upVotes = (props.searchResults.data.ups - props.searchResults.data.downs)
    }
    return(
        <div className="results">
            <div>
            
                <div className="results-box" > 
                    <p className="votes">{upVotes}k</p>
                
                    <div className="post-heading">
                        <p className="sub-name" onClick={props.handleSubChange} 
                        data-sub={`${props.searchResults.data.subreddit_name_prefixed}/`}>
                        {props.searchResults.data.subreddit_name_prefixed}</p>
                
                        <p className="author">posted by u/{props.searchResults.data.author}</p>
                    </div>
                
                    <a href={props.searchResults.data.url} target="_blank" rel="noreferrer">
                    <p className="post-title">{props.searchResults.data.title}</p></a>
                </div>
                
                <div className="media-box">
                    {!props.searchResults.data ? <img className="loading" src={redditLogo} alt=""/> :
                    props.searchResults.data.is_video === true ?
                    <embed type="video/webm"  src={props.searchResults.data.secure_media.reddit_video.scrubber_media_url} /> : 
                    <a href={props.searchResults.data.url}><img src={props.searchResults.data.url} alt=""/></a> }
                    <p className="comments">Comments {props.searchResults.data.num_comments}</p>
                </div>
            </div> 
        </div>
    )
}