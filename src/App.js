import React from 'react';

import Login from './pages/Login';
import User from './pages/User';
import Retail from './pages/retail';
import Scan from './pages/Scanpg';
import RLogin from './pages/mfdlogin';
import CreateUser from './pages/UserNewAcc';
import CreateRetailer from './pages/RetailNewAcc';
import CreateDrug from './pages/DrugDetail';
import LotScan from './pages/LotScan';
import { InjectedConnector } from "@web3-react/injected-connector"
import { useWeb3React } from '@web3-react/core';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandPg from './pages/IntialDash';



function App() {

   
    
  return (
            <Router>
                  <div>
                            <Routes>
                        <Route path='/' element={<LandPg />} />
                        <Route path='/ULogin' element={<Login />} />
                        <Route path='/RLogin' element={<RLogin />} />
                        <Route path='/CUser' element={<CreateUser />} />
                        <Route path='/CRetail' element={<CreateRetailer />} />
                        <Route path='/CDrug' element={<CreateDrug />} />
                        <Route path='/Udash' element={<User />} />
                        <Route path='/Rdash' element={<Retail />} />         
                        <Route path='/Scan' element={<Scan/>} />
                        <Route path='/LotScan' element={<LotScan/>}/>
                  </Routes>     
            </div>
             </Router>
         );
}

export default App;