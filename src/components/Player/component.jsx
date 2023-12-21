import React from "react";
import ReactPlayer from "react-player";

const Player = () => {
    return (
        <div className=" w-full h-full mb-5 mt-5">
            <ReactPlayer
                url="https://www.youtube.com/watch?v=BE2Fj0W4jP4&ab_channel=EurovisionSongContest"
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default Player;
