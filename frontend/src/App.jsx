import { Route, Routes } from 'react-router-dom';
import Startup from './components/Startup/Startup';
import Register from './components/Register/Register';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Startup />} />
        <Route path='/registrarse' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
