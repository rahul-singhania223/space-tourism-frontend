import './App.css';
import Crew from './components/Crew';
import Destination from './components/Destination';
import Home from './components/Home';
import Technology from './components/Technology';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import { Fragment } from 'react';


function App() {
  return (
    <>
      <Router className="App">
        <Fragment>
         
          <Routes>

            <Route exact path="/crew" element={<Crew />} ></Route>
            <Route exact path="/destination" element={<Destination />} ></Route>
            <Route exact path="/technology" element={<Technology />} ></Route>
            <Route exact path="/" element={<Home />} ></Route>

          </Routes>
        </Fragment>
        


      </Router>
    </>

  );
}

export default App;
