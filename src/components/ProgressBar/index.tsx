import { useContext } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'src/app/store';
import { PlayerContext } from 'src/player';

import style from './style.module.scss'

const ProgressBar = () => {
    const player = useContext(PlayerContext)
    const duration = useSelector((state: RootState) => state.progress.duration)

    return (
        <div className={style.progressWrapper}>
            <input
                type="range"
                name="progress-bar"
            />

        </div>
    );
}

export default ProgressBar;