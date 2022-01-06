import React, {useState, useEffect} from "react";
import MusicList from "../components/MusicList";

const MusicContainer = () => {
    const [music, setMusic] = useState([]);

    useEffect (() => {
        getMusic();
    }, [])


    const getMusic = () => {
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    .then(res => res.json())
    .then(music => setMusic(music.feed.entry))
    }

    return (
        <div>
            {<MusicList music={music}/>}
        </div>
    )
}

export default MusicContainer;