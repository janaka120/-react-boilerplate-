import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import Store from "./sagas/ReduxConfig";
import i18n from './locate/i18n';

ReactDOM.render(
    <Provider store={Store} >
    <Suspense fallback="loading">
        <I18nextProvider i18n={i18n}>
            <App />
        </I18nextProvider>
        </Suspense>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
