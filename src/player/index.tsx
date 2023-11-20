import { FC, MutableRefObject, createContext, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hls from "hls.js";

import { ProgressBar, TimeProgress, TogglePlay } from "components/index";

import { IPlayer } from "types/player";
import { RootState } from "src/app/store";
import { getUrlExtension } from "utils/index";
import { setCurrentTime, setDuration } from "features/progress/progress.slice";

import style from './style.module.scss'

export const PlayerContext = createContext<MutableRefObject<HTMLVideoElement | null> | null>(null)

const Player: FC<IPlayer> = ({ url }) => {
  const playerRef = useRef<null | HTMLVideoElement>(null)
  const dispatch = useDispatch()

  const isSeeking = useSelector((state: RootState) => state.progress.seeking)

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
    !isSeeking && dispatch(setCurrentTime(playerRef.current?.currentTime || 0))
  }

  const handleLoadedMetaData = () => {
    dispatch(setDuration(playerRef.current?.duration || 0))
  }

  return (
    <div className={style.playerContainer}>
      <video
        src={url}
        ref={playerRef}
        controls
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetaData}
      />

      <PlayerContext.Provider value={playerRef}>
        <ProgressBar />
        <TogglePlay />
        <TimeProgress />
      </PlayerContext.Provider>
    </div>
  );
}

export default Player;
