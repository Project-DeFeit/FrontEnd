import React from 'react';
import Mfdr from './pages/mfdr';
import Login from './pages/Login';
import User from './pages/User';
import Retail from './pages/retail';
import Scan from './pages/Scanpg';
import RLogin from './pages/mfdlogin';
import CreateUser from './pages/UserNewAcc';
import CreateRetailer from './pages/RetailNewAcc';
import CreateDrug from './pages/DrugDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
            <Router>
                  <div>
                  {/* <Login/>; */}
                  <CreateDrug/>
                  {/* <Mfdr /> */}
                  {/* <Retail /> */}
                  {/* <Scan /> */}       
                  {/* <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/Usrdash' element={<User />} />         
                        <Route path='/Scan' element={<Scan/>} />
                  </Routes>         */}

            </div>
            </Router>
         );
}

export default App;