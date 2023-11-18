import { FC, MutableRefObject, createContext, useEffect, useRef } from "react";
import Hls from "hls.js";

import ProgressBar from "components/ProgressBar";

import { IPlayer } from "types/player";
import { getUrlExtension } from "utils/index";

import style from './style.module.scss'

export const PlayerContext = createContext<MutableRefObject<HTMLVideoElement | null> | null>(null)

const Player: FC<IPlayer> = ({ url }) => {
  const playerRef = useRef<null | HTMLVideoElement>(null)

  useEffect(() => {
    const isM3u8 = getUrlExtension(url) === 'm3u8'

    if (!isM3u8 || !Hls.isSupported() || !playerRef.current) return
    
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
    // console.log('Update --> ', playerRef.current?.currentTime);
  }

  const handleLoadedMetaData = () => {
    // console.log(playerRef.current?.duration);
  }

  return (
    <div className={style.playerContainer}>
      <video
        src={url}
        ref={playerRef}
        controls
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetaData}
      >
      </video>

      <PlayerContext.Provider value={playerRef}>
        <ProgressBar />
      </PlayerContext.Provider>
    </div>
  );
}

export default Player;