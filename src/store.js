import {createStore} from 'redux';

import {languageReducer} from './reducers';

const store =createStore

export default createStore(languageReducer);
