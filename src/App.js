import './App.css';
import { TodoList } from './TodoList'
import image from './woman.jpg'


function App() {
  return (
    <div className='app'>
      <div className='container'>
    <img src={ image } width="300px" alt="women"/>
    </div>
    <div className='container'>
    <h1>To Do List</h1>
    </div>
    <TodoList/>
    </div>
 
  );
}

export default App;
