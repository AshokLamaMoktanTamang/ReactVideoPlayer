import { useCallback, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PlayerContext } from "src/player";
import { Button } from "components/index";

import { RootState } from "src/app/store";
import { setPlaying } from "features/progress/progress.slice";

import { PlayIcon, PauseIcon } from 'assets/icons/index'

const TogglePlay = () => {
    const player = useContext(PlayerContext)
    const isPlaying = useSelector((state: RootState) => state.progress.playing)

    const dispatch = useDispatch()

    const handleToglePlay = useCallback(() => {
        if (!player?.current) return

        dispatch(setPlaying(!isPlaying))
        isPlaying ? player.current.pause() : player.current.play()
    }, [player, isPlaying])

    return (
        <Button
            icon={isPlaying ? <PauseIcon /> : <PlayIcon />}
            toolTip={isPlaying ? "Pause" : "Play"}
            onClick={handleToglePlay}
        />
    );
}

export default TogglePlay;