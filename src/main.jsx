import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage';
import Login from './pages/Login';
import About from './pages/About';
import CreateAccount from './pages/CreateAccount';
import Movie from './pages/Movie';
import Error from './pages/Error';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About/>} />
                <Route path="/create-account" element={<CreateAccount/>} />
                <Route path="/movie-details" element={<Movie />} />
                <Route path="/error" element={<Error />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    </React.StrictMode>,
);