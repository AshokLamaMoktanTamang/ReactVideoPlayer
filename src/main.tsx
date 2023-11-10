import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App
      url="http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8"
    />
  </StrictMode>
);
