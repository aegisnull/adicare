import { Route, Routes } from 'react-router-dom';
import Startup from './components/Startup/Startup';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Startup />} />
        <Route path='/registro' element={<Register />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
