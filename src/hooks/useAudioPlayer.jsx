import React, { useRef, useState, useEffect } from "react";

const useAudioPlayer = ({ defaultVolume }) => {
  const audioPlayer = useRef();

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [seekValue, setSeekValue] = useState(0);
  const [volume, setVolume] = useState(defaultVolume);

  useEffect(() => {
    if (audioPlayer.current) audioPlayer.current.volume = volume;
  }, [audioPlayer, volume]);

  const onPlaying = () => {
    setCurrentTime(audioPlayer.current.currentTime);
    setDuration(audioPlayer.current.duration);
    setSeekValue(
      (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100
    );
  };

  const back = () => {
    audioPlayer.current.currentTime = audioPlayer.current.currentTime - 10;
  };

  const forward = () => {
    audioPlayer.current.currentTime = audioPlayer.current.currentTime + 10;
  };

  useEffect(() => {
    if (playing) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  }, [playing]);

  const toggleAudioPlay = () => {
    setPlaying(!playing);
  };

  const handleVolumeChange = (e) => setVolume(e.target.value);

  const handleProgressBarChange = (e) => {
    const seekto = audioPlayer.current.duration * (+e.target.value / 100);
    audioPlayer.current.currentTime = seekto;
    setSeekValue(e.target.value);
  };

  return {
    audioPlayer,
    currentTime,
    duration,
    seekValue,
    onPlaying,
    back,
    forward,
    toggleAudioPlay,
    handleProgressBarChange,
    volume,
    playing,
    handleVolumeChange,
  };
};

export default useAudioPlayer;