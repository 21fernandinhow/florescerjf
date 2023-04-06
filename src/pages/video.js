import React from "react";
import video from "../video.mp4";

function Video(){
    return(
        <section className="video-section" data-aos="zoom-in" data-aos-duration="1500">
            <h2>Isso é Florescer!</h2>
            <video src={video} controls></video>
        </section>
    )
};

export default Video;