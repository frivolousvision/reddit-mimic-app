import store from "../Store/store";


const Reddit = {
    //async populateReddit() {
    //    const state = store.getState();
    //    const data = await fetch(`https://www.reddit.com/${state.subReddit}.json`);
    //    const jsonData = await data.json();
    //    return jsonData;
    //},
    async loadMore(id) {
        const state = store.getState();
        const data = await fetch(`https://www.reddit.com/${state.subReddit}.json?after=${id}`);
        const jsonData = await data.json();
        return jsonData;
    },
    async subRedditInfo() {
        const state = store.getState();
        if(state.subReddit.length > 0) {
        const data = await fetch(`https://www.reddit.com/${state.subReddit}about.json`);
        const jsonData = await data.json();
        console.log(jsonData);
        return jsonData;
        }
    },
    async searchReddit(searchTerm) {
        try {
            const state = store.getState();
            const data = await fetch(`https://www.reddit.com/${state.subReddit}search.json?q=${searchTerm}&restrict_sr=on`);  
            const jsonData = await data.json();
            return jsonData;
        } catch (err) {
            const errorMessage = `Oops, that didn't work`
            return errorMessage
        }
    },
    async findComments(permalink) {
        const data = await fetch(`https://www.reddit.com/${permalink}.json`);
        const jsonData = await data.json();
        return jsonData;
    }
}

export default Reddit;

//const data = await fetch(`https://www.reddit.com/search.json?q=${term}`);