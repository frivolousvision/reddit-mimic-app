export const TimeSincePosted =(sincePosted, posted, units)=> {
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
}