import React from 'react'
import './Widgets.css'
import {    
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed"
import SearchIcon from "@material-ui/icons/Search"

function Widgets() {
    return (
        <div className='widgets'>
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="Search twitter" type="text"/>
            </div>
            <div className="widgets__widgetsContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1328133278121922561"}/>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="joshuagates"
                    options={{height: 400}}
                />
                <TwitterShareButton
                    url={'https://facebook.com/rakibul111'}
                    options={{ text: '#reactjs is awesome', via: 'MdRakib66038526' }}
                />
            </div>
        </div>
    )
}

export default Widgets;
