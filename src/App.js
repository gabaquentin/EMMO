import React, {useEffect, useState} from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import { UserProvider } from "./contexts/user/userContext";

// Transition between pages
import {CSSTransition, TransitionGroup} from "react-transition-group";

// Private route
import PrivateRoute from './privateRoute'

// Preloader
import Preloader from './components/layouts/preloader';

// Not Found
import NotFound from './components/layouts/notFound';

// Layout
import Header from "./components/layouts/header";
import Login from "./components/layouts/authentication/login";

// Pages
import Home from "./components/pages/home";


const  App = () => {

  return (
    <>
        <Preloader />
        <AuthProvider>
            <UserProvider>
                <div id="main">
                    <Header/>
                    <TransitionGroup>
                        <CSSTransition timeout={300} classNames="fade">
                            <Routes>
                                <Route index element={<Home />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </UserProvider>
        </AuthProvider>
    </>

  );
};

export default App;