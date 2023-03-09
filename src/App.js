import {Routes, Route} from 'react-router-dom';
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Design from "./components/Design";


function App() {
  return (
    <div className='bg-current'>
      <Navbar className="relative z-10"/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/request-design' element={<Design/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
