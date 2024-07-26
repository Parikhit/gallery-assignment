import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';

//Provider
import { SliderProvider } from './contexts/slider.context.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <SliderProvider>
            <App />
        </SliderProvider>
    </React.StrictMode>
);
