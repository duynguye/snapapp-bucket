import React, { Component } from 'react';
import './App.scss';

interface Color {
    color?: string;
    width?: number;
}

function createColor(config: Color): { color: string, area: number } {
    let newColor = { color: 'red', area: 100 };

    return newColor;
}

class App extends Component {
    handleClick(): void {
        console.log('Clicked');
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Deal</h1>
                    <p>{ 'B' }</p>
                    <p>This is for contestr</p>
                </header>
            </div>
        );
    }
}

export default App;
