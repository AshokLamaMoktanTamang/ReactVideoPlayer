import { useCallback, useContext } from "react";

import { PlayerContext } from "src/player";
import { Button } from "components/index";

import { SettingIcon } from "assets/icons";

const Setting = () => {
    const player = useContext(PlayerContext)

    const handleSettingToggle = useCallback(() => {
        if(!player?.current) return
    }, [player])

    return (
        <Button
            icon={<SettingIcon />}
            toolTip="Settings"
            onClick={handleSettingToggle}
        />
    );
}

export default Setting;