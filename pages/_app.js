import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { persistor } from '../redux/store'
import { createWrapper } from 'next-redux-wrapper'
import '../styles/globals.css'
import { PersistGate } from 'redux-persist/integration/react'

 function App({ Component, pageProps }) {
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(App);


