import { useCallback, useContext } from "react";

import { ContainerContext } from "src/player";
import { Button } from "components/index";

import { FullScreenIcon } from "src/assets/icons";

const FullScreen = () => {
    const container = useContext(ContainerContext)

    const handleToggleFullScreen = useCallback(() => {
        if (!container?.current) return

        
    }, [container])

    return (
        <Button
            icon={<FullScreenIcon />}
            toolTip={'Full screen'}
            onClick={handleToggleFullScreen}
        />
    );
}

export default FullScreen;