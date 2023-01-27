import React from "react";
import * as S from "../Style";
import ReactHlsPlayer from 'react-hls-player';
import ReactPlayer from "react-player";

function Shopping() {
    // const playerRef = React.useRef(new HTMLVideoElement());
    const playerRef = React.useRef(null);

    return (
        <S.SearchSliderWrap>
            <S.Title>See you soon! </S.Title>
            {/* <ReactHlsPlayer
                playerRef={playerRef}
                src="http://127.0.0.1:5500/b3caff63-68e0-4a3c-b2cd-244d3d5341f7"
            /> */}
            <ReactPlayer
                // url="/Users/apple/Desktop/crawling/videos/qwer.m3u8"
                url="http://127.0.0.1:5500/videos/qwer.m3u8"
                // url="http://127.0.0.1:5500/b3caff63-68e0-4a3c-b2cd-244d3d5341f7"
                playing={true}
                controls
                width="800px"
                height="500px"
            />
        </S.SearchSliderWrap>
    )
}

export default Shopping