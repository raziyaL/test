import './App.css';
import MainPage from './pages/mainPage/MainPage';
import {Provider} from 'react-redux';
import {store} from './store/index';

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <MainPage/>

        </Provider>
    </div>
  );
}

export default App;
