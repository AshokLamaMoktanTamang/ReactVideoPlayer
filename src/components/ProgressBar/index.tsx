import { ChangeEvent, useCallback, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'src/app/store';
import { PlayerContext } from 'src/player';
import { setCurrentTime } from 'features/progress/progress.slice';

import style from './style.module.scss'

const ProgressBar = () => {
    const player = useContext(PlayerContext)
    const dispatch = useDispatch()

    const duration = useSelector((state: RootState) => state.progress.duration)
    const curentTime = useSelector((state: RootState) => state.progress.currentTime)

    const handleSeek = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (!player?.current) return

        const seekTime = Number(e.target.value)

        dispatch(setCurrentTime(seekTime))
        player.current.currentTime = seekTime
    }, [player])

    return (
        <div className={style.progressWrapper}>
            <input
                type="range"
                name="progress-bar"
                min={0}
                max={duration}
                value={curentTime}
                onChange={handleSeek}
            />

        </div>
    );
}

export default ProgressBar;