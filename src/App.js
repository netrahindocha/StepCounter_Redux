import { Provider } from 'react-redux';
import './App.css';
import StepCounter from './components/StepCounter';
import store from './redux/Store';

function App() {
  return (
    <Provider store={store}>
    <div className='App'>
    <StepCounter/>
    </div>
    </Provider>
  );
}

export default App;