import { ChangeEvent, MouseEvent, useCallback, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'src/app/store';
import { PlayerContext } from 'src/player';
import { setCurrentTime, setSeeking } from 'features/progress/progress.slice';

import style from './style.module.scss'

const ProgressBar = () => {
    const player = useContext(PlayerContext)
    const dispatch = useDispatch()

    const duration = useSelector((state: RootState) => state.progress.duration)
    const curentTime = useSelector((state: RootState) => state.progress.currentTime)

    const progressWidth = (curentTime / duration) * 100

    const handleSeek = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const seekTime = Number(e.target.value)
        dispatch(setCurrentTime(seekTime))
        dispatch(setSeeking(true))
    }, [player])

    const handleMouseUp = useCallback((e: MouseEvent<HTMLInputElement>) => {
        if (!player?.current) return

        const seekTime = Number((e.target as HTMLInputElement).value)
        player.current.currentTime = seekTime
        dispatch(setSeeking(false))
    }, [player])

    return (
        <label className={style.progressWrapper}>
            <input
                type="range"
                name="progress-bar"
                min={0}
                max={duration}
                value={curentTime}
                onChange={handleSeek}
                onMouseUp={handleMouseUp}
            />
            <div className={style.customProgress}>
                <div className={style.progress} style={{ width: `${progressWidth}%` }}></div>
            </div>
        </label>
    );
}

export default ProgressBar;