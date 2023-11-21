import { useCallback, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "src/app/store";
import { ContainerContext } from "src/player";
import { Button } from "components/index";

import { FullScreenIcon, HalfScreenIcon } from "src/assets/icons";
import { setFullScreen } from "src/app/features/player/player.slice";

const FullScreen = () => {
    const container = useContext(ContainerContext)

    const dispatch = useDispatch()
    const isFullScreen = useSelector((state: RootState) => state.player.isFullscreen)

    const handleToggleFullScreen = useCallback(() => {
        if (!container?.current) return

        const screen = container.current

        !document.fullscreenElement ?
            (
                screen.requestFullscreen(),
                dispatch(setFullScreen(true))
            ) :
            (
                document.exitFullscreen(),
                dispatch(setFullScreen(false))
            )
    }, [container])

    return (
        <Button
            icon={
                isFullScreen ?
                    <HalfScreenIcon /> :
                    <FullScreenIcon />
            }
            toolTip={
                isFullScreen ?
                    'Exit Full Screen' :
                    'Full screen'
            }
            onClick={handleToggleFullScreen}
        />
    );
}

export default FullScreen;