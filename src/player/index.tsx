import { FC, useEffect, useRef } from "react";
import Hls from "hls.js";

import { IPlayer } from "types/player";

import style from './style.module.scss'

const Player: FC<IPlayer> = ({ url }) => {
  const playerRef = useRef<null | HTMLVideoElement>(null)

  useEffect(() => {
    if (!Hls.isSupported() || !playerRef.current) return

    const hls = new Hls()

    hls.loadSource(url)
    hls.attachMedia(playerRef.current)

    return () => {
      if (Hls.isSupported()) {
        hls.destroy();
      }
    };
  }, [playerRef, url])

  const handleTimeUpdate = () => {
    console.log('Update --> ', playerRef.current?.currentTime);
  }

  const handleLoadedMetaData = () => {
    console.log(playerRef.current?.duration);
  }

  return (
    <div className={style.playerContainer}>
      <video
        ref={playerRef}
        controls
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetaData}
      >
      </video>
    </div>
  );
}

export default Player;
