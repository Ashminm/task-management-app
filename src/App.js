import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Tasks from './pages/Tasks';
import Addtask from './components/Addtask'
import EditTask from './components/EditTask';


// import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='task' element={<Tasks/>}/>
          <Route path='addtask' element={<Addtask/>} />
          <Route path='edittask' element={<EditTask/>} />
          {/* <Route path='dashboard' element={<Dashboard/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
