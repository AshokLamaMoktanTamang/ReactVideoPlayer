import { useContext } from 'react';

import { PlayerContext } from 'src/player';

import style from './style.module.scss'

const ProgressBar = () => {
    const player = useContext(PlayerContext)

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