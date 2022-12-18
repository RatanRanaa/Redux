import './App.css';
import { Provider } from 'react-redux'; 
import store from './store';
import Users from './Users';
import Form from './Form';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Form/>
        <Users/>
      </div>
    </Provider>
    
  );
}

export default App;
