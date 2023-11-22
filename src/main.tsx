import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App
      url="http://sample.vodobox.com/planete_interdite/planete_interdite_alternate.m3u8"
    // url="http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8"
    // url="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    />
  </StrictMode>
);
