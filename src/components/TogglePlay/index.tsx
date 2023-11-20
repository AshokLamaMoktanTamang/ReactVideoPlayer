import { Button } from "components/index";
import { PlayIcon } from 'assets/icons/index'

const TogglePlay = () => {
    return (
        <Button
            icon={PlayIcon}
            toolTip="Play"
        />
    );
}

export default TogglePlay;