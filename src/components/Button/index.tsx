import { FC } from 'react';

import { IButton } from 'types/button';

import style from './style.module.scss'

const Button: FC<IButton> = ({ icon, toolTip, onClick }) => {
    return (
        <button
            className={style.button}
            onClick={onClick}
        >
            {icon}
            {toolTip}
        </button>
    );
}

export default Button;