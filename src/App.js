import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import '@govbr-ds/core/dist/core.min.css';
import './App.css'; 
import Form from './components/forms/Form';

function App() {
    return (
        <div className="app-container">
            <Header />
            <div className="formulario">
                <Form/>
            </div>
            <Footer />
        </div>
    );
}

export default App;
