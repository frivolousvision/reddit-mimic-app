import './Results.css'
import redditLogo from './reddit-logo.png';
import {Comments} from '../Comments/Comments';
//import {TimeSincePosted} from '../../Utilities/TimeSincePosted';
//import { arrowAltUp } from "@fortawesome/free-solid-svg-icons";


export const Results =(props)=> {
    const created = props.searchResults.data.created_utc;
    const now = new Date();
    const secondsSinceEpoch = Math.round(now.getTime() / 1000);
    const sincePosted = Math.floor((secondsSinceEpoch - created) / 60);

    let posted;
    let units;
    
    if(sincePosted <= 59) {
        posted = sincePosted;
        posted = Math.floor(posted);
        if(posted === 1) {units = "minute"}
        else {units = "minutes"}
    }
    if(sincePosted >= 60 && sincePosted <= 1439) {
        posted = sincePosted / 60;
        posted = Math.floor(posted);
        if(posted < 2) {units = "hour"}
        else {units = "hours"}
    }
    if(sincePosted >= 1440 && sincePosted <= 10079) {
        posted = sincePosted / 1440;
        posted = Math.floor(posted);
        if(posted < 2) {units = "day"}
        else {units = "days"}
    }
    if(sincePosted >= 10080 && sincePosted <= 40320) {
        posted = sincePosted / 10080;
        posted = Math.floor(posted);
        if(posted < 2) {units = "week"}
        else {units = "weeks"}
    }
    if(sincePosted >= 40320 && sincePosted <= 483839) {
        posted = sincePosted / 40320;
        posted = Math.floor(posted);
        if(posted < 2) {units = "month"}
        else {units = "months"}
    }
    if(sincePosted >= 483840) {
        posted = sincePosted / 483840;
        posted = Math.floor(posted);
        if(posted < 2) {units = "year"}
        else {units = "years"}
    }

    let upVotes;
    if((props.searchResults.data.ups - props.searchResults.data.downs) > 1000) {
         upVotes = (props.searchResults.data.ups - props.searchResults.data.downs) / 1000
         upVotes = upVotes.toFixed(1);
    } else{
         upVotes = (props.searchResults.data.ups - props.searchResults.data.downs)
    }
    const toggleComments =(e)=> {
        //if(!props.comments) {
        props.toggleShowComments();
        props.getComments(e);
        //}
        //else {
        //props.toggleShowComments();
        //}
    }
    
    

    return(
        <div className="results">
            <div>
            
                <div className="results-box" > 
                    <p className="votes">{upVotes}k</p>
                
                    <div className="post-heading">
                        <strong><p className="sub-name" onClick={props.handleSubChange} 
                        data-sub={`${props.searchResults.data.subreddit_name_prefixed}/`}>
                        {props.searchResults.data.subreddit_name_prefixed}</p></strong>
                        <p className="author">posted by u/{props.searchResults.data.author} {posted} {units} ago</p>
                    </div>
                
                    <a href={props.searchResults.data.url} target="_blank" rel="noreferrer">
                    <p className="post-title">{props.searchResults.data.title}</p></a>
                </div>
                
                <div className="media-box">
                    {!props.searchResults.data ? <img className="loading" src={redditLogo} alt=""/> :
                    props.searchResults.data.is_video === true ?
                    <embed type="video/webm"  src={props.searchResults.data.secure_media.reddit_video.scrubber_media_url} /> : 
                    <a href={props.searchResults.data.url}><img src={props.searchResults.data.url} alt=""/></a> }
                    <div className="comments-and-percent">
                    
                    <p className="comments" data-link={props.searchResults.data.permalink} 
                    onClick={toggleComments}>Comments {props.searchResults.data.num_comments}</p>
                    <p className="percent-upvote">{props.searchResults.data.upvote_ratio * 100}% Upvoted</p>
                    </div>
                    {!props.showComments ? "" :  
                    !props.comments ? "" :  
                    props.comments[1].data.children.map((child, index)=> {
                      return ( <Comments comment={child} key={index}/>
                      )
                    })}
                    
                </div>
            </div> 
        </div>
    )
}
