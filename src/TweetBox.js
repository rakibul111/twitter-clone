import React, {useState} from 'react'
import './TweetBox.css'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import profile_avatar from './assets/images/profile_avatar.jpg'
import db from './firebase'

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    
    const sendTweet = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            displayName: "Rakibul Islam",
            username: "MdRakib66038526",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://i.ibb.co/ryHv8yv/profile-avatar.jpg"
        });
        setTweetMessage("");
        setTweetImage("");

    }

    return <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
                {/* <Avatar src="https://i.ibb.co/tXQykKn/Exif-JPEG-420.jpg" /> */}
                <Avatar src={profile_avatar} />
                <input 
                    onChange={(e) => setTweetMessage(e.target.value) }
                    value={tweetMessage} 
                    type="text" 
                    placeholder="What's happening?"
                />
            </div>
            <input
                onChange={(e) => setTweetImage(e.target.value) }
                value={tweetImage}
                type="text" 
                className="tweetBox__imageInput" 
                placeholder="Optional: Enter image URL"
            />
            <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton"> Tweet </Button>
        </form>
            
    </div>
}

export default TweetBox;
