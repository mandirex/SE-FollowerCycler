# Follower Cycler
This is a [Stream Elements](https://streamelements.com/) widget aimed at starting Twitch streamers who want to shoutout their most recent followers.

### Usage
#### Manual Installation
For now you can create a custom widget in your StreamElements overlay, go to the right side editing panel, click on settings, "Open Editor", and paste the content of the four files (.js, .html, .css and .json) in the corresponding field in the custom widget (Fields = JSON).
After that you can configure the settings of the widget in the panel on the right side of the overlay editor.
You can customize a lot of things.

After installing the widget, your suffix should be `<i class="material-icons">favorite</i>`. This is a HTML tag that will transform into a materials design icon.
If you want a different icon you can go to [this](https://material.io/resources/icons/?style=baseline) site, search for another icon and replace *'favorite'* with the name of the new icon.
This works for the prefix as well.
If you just want to use text for your prefix/suffix you can empty the box and type the text (or any unicode character) you want in the now empty box.

#### Twitch API
Every time the widget is loaded it will pull your followers from the Twitch API (Otherwise you would only be able to store the followers you got that session). 
After that the newest follower will replace the last follower that was in follower storage (it will always display the *number* most recent followers (where *number* is a number you can specify in the settings in the overlay editor)).

### Shoutout
This widget is absolutely 100% free to use. But I (MandiRex) appreciate a shoutout on your stream! 😉

### Disclaimer
This widget uses the Twitch API, which uses a CLIENT_ID. For now I've supplied my own CLIENT_ID, but I can't guarantee I will keep that CLIENT_ID alive.
If you don't want to rely on my CLIENT_ID go get yourself one [here](https://dev.twitch.tv/console/apps) and replace the part after Client-ID in [widget.js](widget.js) with your new CLIENT_ID.

### Issues/ Bugs
You can use the Issues tab to report issues you have with this tool.
