import RootRouter from '../router/rootRouter';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <RootRouter />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
