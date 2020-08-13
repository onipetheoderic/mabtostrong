import React from 'react';
import { Switch, Route, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion"
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';



function Routing(props) {
    return (
        <Router>
            <AnimatePresence exitBeforeEnter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/contact" component={ContactPage} />
                </Switch>
            </AnimatePresence>   
        </Router>
    )
}
  
export default Routing


//exitBeforeEnter to make sure one animation finishes before the next