import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "src/app/store";

import { hhmmss } from "utils/index";
import style from './style.module.scss'

const TimeProgress = () => {
    const [showRemainingTime, setShowRemainingTime] = useState<boolean>(false)

    const duration = useSelector((state: RootState) => state.progress.duration)
    const curentTime = useSelector((state: RootState) => state.progress.currentTime)

    const memoizedDuration: string = useMemo(() => {
        return hhmmss(duration)
    }, [duration])

    return (
        <button
            className={style.progressTime}
            onClick={() => setShowRemainingTime(!showRemainingTime)}
        >
            <p>
                {
                    showRemainingTime ?
                        `- ${hhmmss(duration - curentTime)}` :
                        hhmmss(curentTime)
                }
            </p>
            <span>/</span>
            <p>
                {memoizedDuration}
            </p>
        </button>
    );
}

export default TimeProgress;