import React from "react";
import ReactPlayer from "react-player";

const Player = () => (
    <ReactPlayer
        url="https://www.youtube.com/watch?v=BE2Fj0W4jP4&ab_channel=EurovisionSongContest"
        width="100%"
        height="100%"
        className="mb-5 relative z-50 w-full m-auto mt-10 h-[300px] "
    />
);

export default Player;
