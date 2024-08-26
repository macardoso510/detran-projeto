import React from 'react';
import './App.css';
import {
    Route,
    Link,
    BrowserRouter,
    Routes,
} from "react-router-dom";
import MainAppBar from './MainAppBar';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route>
                    <Route path="login" element={<TelaLogin />} />
                </Route> */}
                <Route path="/" element={<MainAppBar />}>
                   
                    <Route path="*" element={<NoMatch />} />
                    <Route path="home" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

function NoMatch() {
    return (
        <div>
            <h2>Pagina não encontrada</h2>
            <p>
                <Link to="/">volte para a página inicial</Link>
            </p>
        </div>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
            
        </div>
    );
}