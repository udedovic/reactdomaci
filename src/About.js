import React from "react";
import AnalogueClock from "react-analogue-clock";

function About() {
  const clockOptions = {
    baseColor: "#ffffff",
    borderColor: "#000000",
    borderWidth: 5,
    centerColor: "#000000",
    handColors: {
      hour: "#000000",
      minute: "#000000",
      second: "#000000",
    },
    notchColor: "#000000",
    numbersColor: "#000000",
    showNumbers: true,
    size: 300,
  };

  return (
    <div style={{backgroundColor:'#e6ffff', height:'100vh'}}>
      <h1>About</h1>
      <br></br>
      <h4>
        The application provides users the ability to create their own list of
        songs. When the song is played, the user can remove it from the list.
      </h4>
      <h4>
        {" "}
        Songs are stored at a local storage, so after refreshing the page, the
        list remains saved.
      </h4>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AnalogueClock
          {...clockOptions}
          style={{ display: "flex", justifyContent: "center" }}
        />
      </div>
    </div>
  );
}

export default About;
