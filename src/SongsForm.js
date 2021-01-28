import React from 'react'
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react';


function SongsForm({addSong}){

    const [song, setSong] = useState({
        id: "",
        name: ""
        // artist: ""
    });

    function handleSongInputChange(e){
        setSong({...song, name: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(song.name.trim()){
            addSong({...song, id:uuidv4()});
            setSong({...song, name:""});
        }
    }

    return(
      <form onSubmit={handleSubmit}>
          <input onChange={handleSongInputChange} value={song.name} name="name" type="text"/>
          {/* <input onChange={handleSongInputChange} value={song.artist} name="artist" type="text"/> */}
          <button type="submit">Add</button>
      </form>  
    );
}

export default SongsForm;