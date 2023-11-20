import { FC, useState } from 'react';

import { IButton } from 'types/button';

import style from './style.module.scss'

const Button: FC<IButton> = ({ icon, toolTip, onClick }) => {
    const [tooltipTitle, setTooltipTitle] = useState<string | null>(toolTip || null)

    return (
        <button
            className={style.button}
            onClick={onClick}
            onMouseDown={() => setTooltipTitle(null)}
            onMouseLeave={() => setTooltipTitle(toolTip || null)}
        >
            {icon}
            {
                tooltipTitle &&
                <span className={style.toolTip}>
                    {toolTip}
                </span>
            }
        </button>
    );
}

export default Button;