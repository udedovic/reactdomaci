import React from "react";

function Song({song}) {
    return(
        <div style={{display:"flex"}}>
            <li style={{color:'white'}}>{song.name}</li>
            <button>X</button>
        </div>
    );
}

export default Song;