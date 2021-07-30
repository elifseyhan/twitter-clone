import React, {useState} from 'react';
import {ImageIcon, GIFIcon, PollIcon, EmojiIcon, ScheduleIcon} from '../icons/Icon';
import db from "../firebase";
import firebase from "firebase";

const TweetBox = () => {
    const [content, setContent] = useState('');
    const sendTweet = () => {
        if(content !== ''){
            db.collection('feed').add({
                displayName: "Elif Seyhan",
                username: "@elifseyhan",
                content,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                image: "https://i.pinimg.com/originals/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888.jpg",
                avatar: "https://i.pinimg.com/originals/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888.jpg"
            });
            setContent("");
        }
    }
    return (
        <div className="flex flex-1 flex-col mt-2 px-2">
            <textarea className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent" placeholder="What's happening?"
            onChange={e => setContent(e.target.value)} value={content} />
            <div className="flex items-center justify-between">
                <div className="flex -ml-3">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <ImageIcon className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <GIFIcon className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <PollIcon className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <EmojiIcon className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <ScheduleIcon className="w-6 h-6 text-primary-base" />
                    </div>
                </div>
                <button className="bg-primary-base text-white rounded-full px-4 py-2 font-medium" onClick={sendTweet}>Tweet</button>
            </div>
        </div>
    )
}

export default TweetBox;