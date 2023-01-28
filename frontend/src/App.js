import { Route, Routes } from 'react-router-dom';
import './App.css';
import Startup from './components/Startup/Startup';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Startup />} />
      </Routes>
    </div>
  );
}

export default App;
