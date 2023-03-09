import {Routes, Route} from 'react-router-dom';
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='bg-current'>
      <Navbar className="relative z-10"/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
