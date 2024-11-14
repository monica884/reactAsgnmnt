
import './App.css';
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import { Route, Routes, } from 'react-router-dom';
import Capsule from './Components/Capule01/Capsule';
import View from './Components/View/View'
import Mainlayout from './Components/Mainlayout/Mainlayout';






function App() {


  return (
    <>


      <Router>
        <Routes>

          <Route path="" element={<Mainlayout />}>
            <Route path="/" element={<Home />} />
            <Route path="view/:id" element={<View />} />
            <Route path="/capsule" element={<Capsule />} />
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
