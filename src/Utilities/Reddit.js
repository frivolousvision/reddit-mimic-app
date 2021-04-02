import {useSelector} from 'react-redux';
import {selectSubReddit} from "../Features/subRedditSlice";
import store from "../Store/store";
import App from '../App';

const Reddit = {
    async populateReddit() {
    const state = store.getState();
    const data = await fetch(`https://www.reddit.com/${state.subReddit}.json`);
    const jsonData = data.json();
    return jsonData;
    },

    async searchReddit(searchTerm) {
    try {
    const state = store.getState();
    const data = await fetch(`https://www.reddit.com/${state.subReddit}/search.json?q=${searchTerm}&restrict_sr=on`);  
    const jsonData = data.json();
    console.log(state.subReddit)
    return jsonData;
    } catch(err) {
        const errorMessage = `Oops, that didn't work`
        return errorMessage
    }
}
}

export default Reddit;

//const data = await fetch(`https://www.reddit.com/search.json?q=${term}`);