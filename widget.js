// Some global variables:  
let channel = "";
let channelID = "";
let followers = [];
let maxFollowers;
let timeoutTime;
let counter;
let display;
let containerDivJQ;
let animationDuration;

// The text before and after the username:
let prefix, suffix;
let prefixSpace, suffixSpace;

// Client ID for the Twitch API
// You can change this out for your own CLIENT_ID:
const CLIENT_ID = "mg9tk88bv9x7xo1j20hodxjhr3d8mo";
// Twitch API settings: 
let basicSettings = {
    "url": "",
    "method": "GET",
    "timeout": 0,
    "headers": {
        "Client-ID": CLIENT_ID,
        "Accept": "application/vnd.twitchtv.v5+json"
    }
}

// TODO: Add support for Subscribers, Donations and Cheers!
    
// Get the id of twitch user with username 'username'
function getID(username) {

    // TODO: Move the settings to a global variable. The URL is the only part that differs anyway.
    var getIDSettings = basicSettings;
    getIDSettings.url = "https://api.twitch.tv/kraken/users?login="+username;

    return $.ajax(getIDSettings);
}

// Get all the followers for a Twitch channel with id = id
function getFollowers(id) {
    let url = "https://api.twitch.tv/kraken/channels/" + id + "/follows?limit="+maxFollowers+"&direction="+"desc";
    let getFollowerSettings = basicSettings;
    getFollowerSettings.url = url;

    return $.ajax(getFollowerSettings);
}        

// We only need the names of the followers so we process them here.
function processFollowers(f) {
    let followerArray = [];
    for(let i = 0; i < maxFollowers; i++){
        followerArray.push(f[i].user.display_name);
    }
    return followerArray;
}

// Executed on load of the extension
window.addEventListener('onWidgetLoad', async function (obj) {
    const fieldData = obj["detail"]["fieldData"];

    // The amount of followers to display and the time each follower is on screen.
    maxFollowers = fieldData["amountToDisplay"];
    timeoutTime = fieldData["amountDelayBetweenSwitch"] * 1000;

    prefix = fieldData["prefix"];
    suffix = fieldData["suffix"];
    prefixSpace = fieldData["prefixSpace"];
    suffixSpace = fieldData["suffixSpace"];

    animationDuration = fieldData["animationDuration"] * 1000;

    prefix = prefix;
    suffix = suffix;

    // The name of the channel using this extension
    channel = obj["detail"]["channel"]["username"];

    display = document.querySelector("#_display");
    document.querySelector("#_prefix").innerHTML = prefix;
    document.querySelector("#_suffix").innerHTML = suffix;

    containerDivJQ = $("#container_div");

    // Get the id and the followers of the channel with channelname = channel.
    // This will make sure all maxFollower slots are filled.
    const idResult = await getID(channel);
    channelID = idResult.users[0]._id;
    const followerResult = await getFollowers(channelID);
    followers = processFollowers(followerResult.follows);
    
    // Set the counter to 0 to display the first name
    counter = 0;
    // Start the display routine
    changeDisplay();
});

// This function is executed every time a new event occurs (eg. new follow, new subscriber etc)
window.addEventListener('onEventReceived', function (obj) {
    const listener = obj["detail"]["listener"];
    const data = obj["detail"]["event"];

    // If this event is a new follower than we add the follower to the list, removing a earlier follower.
    if(listener === "follower-latest"){
        newFollower(data["name"]);
    }

});

function newFollower(name) {
    // There sure is a better/ faster way to do this, but this is what I created in a very short amount of time: 
    let temp = [];
    // We keep array slot 0 for the new follower
    for(let i = 0; i < followers.length - 1; i++){
        temp[i+1] = followers[i];
    }
    temp[0] = name;
    followers = temp;
}

function changeDisplay() {
    containerDivJQ.addClass("animation");
    display.innerHTML = (prefixSpace ? " " : "") + followers[counter] + (suffixSpace ? " " : "");
    setTimeout(() => {containerDivJQ.removeClass("animation")}, animationDuration);

    counter++;
    if(counter >= maxFollowers){
        counter = 0;
    }
    setTimeout(changeDisplay, timeoutTime - animationDuration);
}