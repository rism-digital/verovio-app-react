import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

import filename from './hello.mei';

window.verovioCallback = function prout() {
    axios.get(filename)
        .then(response => {
            window.app.loadData(response.data);
        });
}

class App extends Component {

    constructor() {
        super();
        this.state = {
            data: "<p>loading...</p>"
        }
    }

    componentDidMount() {

        const s = document.createElement('script');
        s.type = 'module';
        s.async = true;
        s.innerHTML = "\
             import 'https://www.verovio.org/javascript/app/verovio-app.js'\n\
             window.app = new Verovio.App(document.getElementById('app'), {});\n\
             window.verovioCallback();\n\
             ";
        document.body.appendChild(s);

    }

    render() {
        return <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title"></h1>
                </header>
                <div id="app"/>
            </div>
    }

}

export default App;
