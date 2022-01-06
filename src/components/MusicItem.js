import React from "react";

const MusicItem = ({music}) => {

    return <li>{music["im:artist"].label} - {music["im:name"].label}</li>
}

export default MusicItem;