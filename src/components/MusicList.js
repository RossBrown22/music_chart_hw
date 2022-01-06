import React from "react";
import MusicItem from "./MusicItem";

const MusicList = ({music}) => {

    const musicItems = music.map((music, index) => {
        return <MusicItem music={music} key={index}/>
    })

    return (
        <div>
        <ul>
            {musicItems}
        </ul>
        </div>
    )
}

export default MusicList;