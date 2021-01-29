import React from "react";
import './SongCss.css';

function Song({song, removeSong}) {

    function handleRemoveClick(){
        removeSong(song.id);
    }

    return(
        <div class = "container">
            <li class="item">{song.name}</li>
            <button class="Xbtn" onClick={handleRemoveClick}>X</button>
        </div>
    );
}

export default Song;