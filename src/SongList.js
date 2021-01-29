import React from "react";
import Song from "./Song";
import "./SongsListCss.css";

function SongList({ songs, removeSong }) {
  let data = Array.from(songs);
  return (
    <div class ="pozadina">
      <ul class="list">
        {data.map((song) => (
          <Song key={song.id} song={song} removeSong={removeSong} />
        ))}
      </ul>
    </div>
  );
}

export default SongList;
