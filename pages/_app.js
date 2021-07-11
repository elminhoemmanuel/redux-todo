import { Provider } from 'react-redux'
import store from '../redux/store'
import { createWrapper } from 'next-redux-wrapper'
import '../styles/globals.css'

 function App({ Component, pageProps }) {
  
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(App);


