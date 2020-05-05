import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

    constructor(){
        super()
        this.state = {
            countries: []
        }
    }

    componentDidMount() {
        axios.get("https://countries.tech-savvy.tech/countries")
        .then(response => {
            this.setState({countries: response.data})
        })
    }

    render() {
        return (
            <div className="App">
                {this.state.countries.map(country => <h1>{country.name.common}</h1>)}
            </div>
        );
    }
}

export default App;

