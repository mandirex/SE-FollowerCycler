# Variable Cycler
A Stream Elements Widget that cycles your latest followers, subscribers, donations or cheers.
FOR NOW ONLY THE FOLLOWERS WORK

### Usage
Once this widget is approved by StreamElements you will be able to add it to your overlay.

For now you can create a custom widget in your StreamElements overlay and paste the content of the four files in the corresponding field in the custom widget (Fields = JSON).
After that you can configure the settings of the widget in the panel on the right side of the overlay editor.
You can customize a lot of things.

Every time the widget is loaded it will pull your followers from the Twitch API (Otherwise you would only be able to store the followers you got that session). 
After that the newest follower will replace the last follower that was in follower storage (it will always display the {number} most recent followers (where number is a number you can specify in the settings in the overlay editor)).

### Shoutout
This widget is absolutely 100% free to use. But if you want give me (MandiRex) a shoutout in your stream for creating this awesome tool.

### Disclaimer
This widget uses the Twitch API, which uses a CLIENT_ID. For now I've supplied my own CLIENT_ID, but I can't guarantee I will keep that CLIENT_ID alive.
If you don't want to rely on my CLIENT_ID go get yourself one [here](https://dev.twitch.tv/console/apps)
