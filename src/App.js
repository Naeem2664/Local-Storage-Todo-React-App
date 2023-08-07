import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Footer from './Components/Footer';
import Todo from './Components/Todo.js';

function App() {
  return(
    <div className="app">
      <div className="header">
      <h1 className='text-center'>Todo App</h1>
      <h6 className='text-center'>Manage your daily routine tasks with local storage </h6>
      </div>
      
      <Todo/>
      <Footer/>
    </div>
  );
}

export default App;
