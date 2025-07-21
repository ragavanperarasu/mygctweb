import { Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Alumin from './components/Alumin';
import CreateAlumin from './components/CreateAlumin';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alumni" element={<Alumin />} />
        <Route path="/about" element={<About />} />
        <Route path="/createalumni" element={<CreateAlumin />} />
      </Routes>
  )
}

export default App
