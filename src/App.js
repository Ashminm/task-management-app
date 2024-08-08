import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Tasks from './pages/Tasks';
import EditTask from './components/EditTask';
import ViewScreen from './components/ViewScreen';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='task' element={<Tasks/>}/>
          <Route path='edittask' element={<EditTask/>} />
          <Route path='FullScreen/:id' element={<ViewScreen/>} />
      </Routes>
    </div>
  );
}

export default App;
