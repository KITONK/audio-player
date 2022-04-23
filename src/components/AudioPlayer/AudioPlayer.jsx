import React from "react";
import styled from "styled-components";
import AudioVolume from "../AudioVolume/AudioVolume";

import { formatDuration } from "../../lib/formatDuration";
import useAudioPlayer from "../../hooks/useAudioPlayer";
import { Play, Pause, Back, Forward } from "../Icons/Icon";

const AudioPlayer = ({}) => {
  const {
    audioPlayer,
    currentTime,
    duration,
    seekValue,
    volume,
    playing,
    onPlaying,
    back,
    forward,
    toggleAudioPlay,
    handleProgressBarChange,
    handleVolumeChange,
  } = useAudioPlayer({ defaultVolume: 0.2 });

  return (
    <Wrapper>
      <Input
        type="range"
        min="0"
        max="100"
        step="1"
        value={seekValue}
        style={{
          background: `linear-gradient(to right, #FFBA08 ${seekValue}%, #D6D6D6 0)`,
        }}
        onChange={handleProgressBarChange}
      />
      <Content>
        <audio
          src="/sounds/hyper.mp3"
          ref={audioPlayer}
          onTimeUpdate={onPlaying}
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
        <Menu>
          <Row>
            <Button onClick={back}>
                <Back />
            </Button>
            <Button onClick={toggleAudioPlay}>
                {!playing || currentTime === duration
                    ? <Play />
                    : <Pause />
                }
            </Button>
            <Button onClick={forward}>
                <Forward />
            </Button>
          </Row>
          <Row>
            <span>
              {formatDuration(currentTime)} / {formatDuration(duration)}
            </span>
            <AudioVolume volume={volume} handleVolumeChange={handleVolumeChange} />
          </Row>
        </Menu>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 10px;
  width: 338px;
  padding-top: 6px;
  position: relative;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: block;
  background: #ebebeb;
  border-radius: 10px;
  position: relative;
  z-index: 20;
`;

const Menu = styled.div`
  padding: 9px 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Row = styled.div`
  display: flex;
  gap: 17px;
  align-items: center;
  span {
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 170%;
    color: #848484;
  }
`;

const Input = styled.input`
  display: flex;
  justify-content: center;
  width: 99%;
  height: 30px;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  border-radius: 20px;
  position: absolute;
  top: 0;
  z-index: 10;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 0px;
    height: 0px;
    cursor: pointer;
  }
`;

const Button = styled.div`
  cursor: pointer;
`;

export default AudioPlayer;