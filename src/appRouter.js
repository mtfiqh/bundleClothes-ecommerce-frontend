import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import Contact from './components/page/contact'
const AppRouter = () => {
    return (
        <BrowserRouter>
        <div>
            <Route path='/' exact component={App}/>
            <Route path='/contact' component ={Contact}/>
        </div>
        </BrowserRouter>
    );
};

export default AppRouter;