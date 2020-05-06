# Variable Cycler
A Stream Elements Widget that cycles your latest followers, subscribers, donations or cheers.
FOR NOW ONLY THE FOLLOWERS WORK

### Usage
#### Installation through StreamElements
Once this widget is approved by StreamElements you will be able to add it to your overlay.

#### Manual Installation
For now you can create a custom widget in your StreamElements overlay and paste the content of the four files in the corresponding field in the custom widget (Fields = JSON).
After that you can configure the settings of the widget in the panel on the right side of the overlay editor.
You can customize a lot of things.

#### Twitch API
Every time the widget is loaded it will pull your followers from the Twitch API (Otherwise you would only be able to store the followers you got that session). 
After that the newest follower will replace the last follower that was in follower storage (it will always display the *number* most recent followers (where *number* is a number you can specify in the settings in the overlay editor)).

### Shoutout
This widget is absolutely 100% free to use. But I (MandiRex) appreciate a shoutout on your stream! 😉

### Disclaimer
This widget uses the Twitch API, which uses a CLIENT_ID. For now I've supplied my own CLIENT_ID, but I can't guarantee I will keep that CLIENT_ID alive.
If you don't want to rely on my CLIENT_ID go get yourself one [here](https://dev.twitch.tv/console/apps) and replace the part after Client-ID in [widget.js](widget.js) with your new CLIENT_ID.
