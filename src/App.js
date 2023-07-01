import React from "react";
import { Slider, Navbar, ArticlePages, CupEvents, Sponsors, Footer } from './components';
import './App.css';


const App = () => {


    return (
        <div className="App">
            <header>
                <Navbar />
                <Slider />
            </header>

            <main>
                <ArticlePages />
                <CupEvents />
            </main>

            <Sponsors />

            <footer>
                <Footer />
            </footer>

        </div>
    );
}

export default App;