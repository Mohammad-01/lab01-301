import React from "react";
import Header from "./Compnents/Header";
import Main from "./Compnents/Main";
import Footer from "./Compnents/Footer";
import './App.css';

class App extends React.Component {
    render(){
        return(
            <div>
                { <h1>Title</h1> }
                <Header/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}

export default App;
