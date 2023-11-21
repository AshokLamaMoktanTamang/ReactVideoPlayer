import { FC } from "react";
import { useSelector } from "react-redux";

import { Button } from "components/index";
import { RootState } from "src/app/store";

import { PlayIcon, PauseIcon } from 'assets/icons/index'
import { ITogglePlay } from "types/togglePlay";

const TogglePlay:FC<ITogglePlay> = ({onClick}) => {
    const isPlaying = useSelector((state: RootState) => state.progress.playing)

    return (
        <Button
            icon={isPlaying ? <PauseIcon /> : <PlayIcon />}
            toolTip={isPlaying ? "Pause" : "Play"}
            onClick={onClick}
        />
    );
}

export default TogglePlay;