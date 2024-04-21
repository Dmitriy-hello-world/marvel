import RootRouter from '../router/rootRouter';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { CustomModal } from '../components/customModal/customModal';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <RootRouter />
          <CustomModal />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
