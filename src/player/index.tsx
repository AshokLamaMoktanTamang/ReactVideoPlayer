import { FC, MutableRefObject, createContext, useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hls from "hls.js";

import { FullScreen, ProgressBar, Setting, TimeProgress, TogglePlay, VolumeSlider } from "components/index";

import { IPlayer } from "types/player";
import { RootState } from "src/app/store";
import { getUrlExtension } from "utils/index";
import { setCurrentTime, setDuration, setPlaying } from "features/progress/progress.slice";

import style from './style.module.scss'

export const PlayerContext = createContext<MutableRefObject<HTMLVideoElement | null> | null>(null)
export const ContainerContext = createContext<MutableRefObject<HTMLDivElement | null> | null>(null)

const Player: FC<IPlayer> = ({ url }) => {
  const playerRef = useRef<null | HTMLVideoElement>(null)
  const containerRef = useRef<null | HTMLDivElement>(null)

  const dispatch = useDispatch()

  const isSeeking = useSelector((state: RootState) => state.progress.seeking)
  const isPlaying = useSelector((state: RootState) => state.progress.playing)

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

  const handleToglePlay = useCallback(() => {
    if (!playerRef?.current) return

    const player = playerRef.current

    dispatch(setPlaying(!isPlaying))
    isPlaying ? player.pause() : player.play()
  }, [playerRef, isPlaying])

  return (
    <div
      className={style.wrapper}
      ref={containerRef}
    >
      <div
        className={style.playerContainer}
        onClick={handleToglePlay}
      >
        <video
          src={url}
          ref={playerRef}
          // controls
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetaData}
        />
      </div>

      <div className={style.controlsWrapper}>
        <TogglePlay onClick={handleToglePlay} />
        <PlayerContext.Provider value={playerRef}>
          <ProgressBar />
          <VolumeSlider />
          <Setting />
        </PlayerContext.Provider>

        <TimeProgress />

        <ContainerContext.Provider value={containerRef}>
          <FullScreen />
        </ContainerContext.Provider>
      </div>
    </div>
  );
}

export default Player;
