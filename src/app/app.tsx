import { FC, useEffect, useRef } from "react";
import Hls from "hls.js";

import { IApp } from "types/app";

import style from './app.module.scss'

const App: FC<IApp> = ({ url }) => {
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

  return (
    <div className={style.playerContainer}>
      <video ref={playerRef} controls>
      </video>
    </div>
  );
}

export default App;
