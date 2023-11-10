import { FC } from "react";

import { Provider } from 'react-redux'
import { store } from './store'

import Player from '../player';
import { IPlayer } from 'types/player';

const App: FC<IPlayer> = () => {
    return (
        <Provider store={store}>
            <Player
                url="http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8"
            />
        </Provider>
    );
}

export default App;