import React from 'react'
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react';
import './SongsFormCss.css';


function SongsForm({addSong}){

    const [song, setSong] = useState({
        id: "",
        name: ""
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
      <form class="main-form" onSubmit={handleSubmit} >
          <input autoComplete="off" onChange={handleSongInputChange} value={song.name} name="name" type="text"/>
          <button class="addbtn" type="submit">Add</button>
      </form>  
    );
}

export default SongsForm;