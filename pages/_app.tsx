import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../store/reducers'

const store = createStore(rootReducer)

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store} >
    <Component {...pageProps} />
  </Provider>
}
export default MyApp
