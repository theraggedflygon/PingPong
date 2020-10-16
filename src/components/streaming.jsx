import React, { Component } from 'react';
import {TwitchEmbed} from "react-twitch-embed";

class Streaming extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <h1 style={{color: "white"}}>Tournament Live Stream and Highlights</h1>
                <TwitchEmbed
                    channel="theraggedflygon"
                    id="theraggedflygon"
                    theme="dark"
                    muted
                    withChat={false}
                />
                <hr style={{color: "white"}}/>
                <h4 style={{color: "white"}}>Follow tournament action live from home on Twitch using the player above or going to twitch.tv/theraggedflygon!</h4>
            </React.Fragment>
         );
    }
}
 
export default Streaming;