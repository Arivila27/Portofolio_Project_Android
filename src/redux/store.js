import { legacy_createStore as createStore} from 'redux'


import {default  as reducer} from './reducer'


const storeState = createStore(reducer)

export default storeState;