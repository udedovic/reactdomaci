import React from 'react'
import SongsForm from './SongsForm'
import SongList from './SongList'
import {useState, useEffect} from 'react'
import './SongsFormCss.css';

const LOCAL_STORAGE_KEY = "react-song-list";

function Home(){

    const [songs, setSongs] = useState([]);

    useEffect(()=>{
        const storageSongs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if(storageSongs){
            setSongs(storageSongs);
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(songs));
    }, [songs])

    function removeSong(id) {
        setSongs(songs.filter(song=> song.id!==id));
    }

    function addSong(song) {
      setSongs([song, ...songs]);
    }

    return(
        <div style={{backgroundColor:'#e6ffff'}}>
            <h1>♪ List of songs ♪</h1>
            <SongsForm addSong={addSong} />
            <SongList songs={songs} removeSong={removeSong}/>
        </div>
    );
}

export default Home;