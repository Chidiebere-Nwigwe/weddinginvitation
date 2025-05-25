import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './components/Homepage.js'
import Invitation from './components/Invitation.js';

function App() {
  return (
    <Router basename="/weddinginvitation">
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/invitation' element={<Invitation />}></Route>

      </Routes>
    </Router>

  );
}

export default App;
