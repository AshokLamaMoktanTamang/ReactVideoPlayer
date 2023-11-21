import { ChangeEvent, useCallback, useContext, useState } from "react";
import { PlayerContext } from "src/player";
import { Button } from "components/index";

import { MuteIcon, VolumeIcon } from "assets/icons";
import style from './style.module.scss'

const VolumeSlider = () => {
    const player = useContext(PlayerContext)
    const [volume, setVolume] = useState<number>(player?.current?.volume || 1)

    const handleVideoVolume = useCallback((volume: number) => {
        if (!player?.current) return

        player.current.volume = volume
        setVolume(volume)
    }, [player])

    const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!player?.current) return

        const volume = Number(e.target.value) / 100
        handleVideoVolume(volume)
    }

    const handleTogleMute = () => {
        volume === 0 ?
            handleVideoVolume(1) :
            handleVideoVolume(0)
    }

    return (
        <div className={style.volumeWrapper}>
            <Button
                icon={volume === 0 ? <MuteIcon /> : <VolumeIcon />}
                toolTip={volume === 0 ? "Unmute" : "Mute"}
                onClick={handleTogleMute}
            />

            <label className={style.volumeSlider}>
                <input
                    type="range"
                    min={0}
                    max={100}
                    value={volume * 100}
                    onChange={handleVolumeChange}
                />
                <div className={style.customRange}>
                    <div className={style.volumeRange} style={{ width: `${volume * 100}%` }}></div>
                </div>
            </label>
        </div>
    );
}

export default VolumeSlider;