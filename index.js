/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-native-paper';
import { store } from './Redux/Store';

const ReduxApp = ()=>(
    <Provider store={store} >
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => ReduxApp);
