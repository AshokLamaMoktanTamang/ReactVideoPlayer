import { Button } from "components/index";
import {ReactComponent as PlayIcon} from 'assets/icons/play.svg'

const TogglePlay = () => {
    return (
        <>
            <PlayIcon />
            <Button
                // icon={<PlayIcon />}
                toolTip="Play"
            />
        </>
    );
}

export default TogglePlay;