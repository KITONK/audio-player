import React, { useState } from 'react';
import styled from "styled-components";
import { VolumeLow, VolumeMax, VolumeMute } from '../Icons/Icon';

const AudioVolume = ({ volume, handleVolumeChange }) => {
    const [openAudioController, setOpenAudioController] = useState(false);

    const generateIcon = (amount) => {
        if (amount > 0 && amount < 1) return <VolumeLow />
        else if (amount > 0.9) return <VolumeMax />
        else return <VolumeMute />
    }

    return (
        <Wrapper>
            {openAudioController && (
                <AudioControllerWrapper>
                    <Input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={volume}
                        onChange={handleVolumeChange}
                    />
                </AudioControllerWrapper>
            )}
            <div onClick={() => setOpenAudioController(!openAudioController)}>
                {generateIcon(volume)}
            </div>
        
        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: relative;
`;

const AudioControllerWrapper = styled.div`
    position: absolute;
    bottom: 115%;
    background: #ebebeb;
    opacity: 0.8;
    width: 24px;
    height: 102px;
    margin-bottom: 14px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: center bottom;
    transition: all 0.2s ease 0s;
    visibility: visible;
    transform: scale(1);
`;

const Input = styled.input`
  appearance: slider-vertical;
  height: 70px;
  width: 4px;
  outline: none;
`;

export default AudioVolume;