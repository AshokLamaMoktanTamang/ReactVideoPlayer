import { FC } from "react";

import { Provider } from 'react-redux'
import { store } from './store'

import Player from '../player';
import { IPlayer } from 'types/player';

const App: FC<IPlayer> = ({ url }) => {
    return (
        <Provider store={store}>
            <Player
                url={url}
            />
        </Provider>
    );
}

export default App;