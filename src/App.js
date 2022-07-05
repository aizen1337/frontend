import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import AddMatch from '../src/pages/addMatch/AddMatch'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddMatch/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
