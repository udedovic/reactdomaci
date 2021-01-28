import React from "react";
import Song from './Song'

function SongList(songs) {
    let data = Array.from(songs);
    return(
        <ul>
            {data.map((song)=>(
                <Song key={song.id} song={song}/>
            ))}
        </ul>
    );
}

export default SongList;