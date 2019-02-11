import React  from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from "connected-react-router";

import createStore from './redux/create-store';
import history from './utils/HistoryUtils';
import AppRouter from './AppRouter';

const store = createStore();

const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppRouter/>
        </ConnectedRouter>
    </Provider>
);

export default App;
