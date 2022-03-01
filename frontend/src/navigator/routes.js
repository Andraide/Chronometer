import React from "react";
import { history } from '../utils/history';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Timer from "../screens/Timer/Timer"


export default function Navigator() 
{
        return (
            <Router history={history}>
                <Routes>
                    <Route path= "/" element={<Timer/>}/>
                </Routes>
            </Router>
        )
}