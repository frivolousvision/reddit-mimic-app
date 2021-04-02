import './Results.css'
import redditLogo from './reddit-logo.png';

export const Results =(props)=> {
    
    return(
        <div className="results">
            <div>
            
            <div className="results-box" > 
            <p>{props.searchResults.data.subreddit_name_prefixed}</p>
            <p>{props.searchResults.data.title}</p>
            </div>
            <div className="media-box">
            {!props.searchResults.data ? <img className="loading" src={redditLogo} alt=""/> :
            props.searchResults.data.is_video === true ? 
            <embed type="video/webm"  src={props.searchResults.data.secure_media.reddit_video.scrubber_media_url} /> : 
            <img src={props.searchResults.data.url_overridden_by_dest} alt=""/> }
            </div>
            </div>
        </div>
    )
}