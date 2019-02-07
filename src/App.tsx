import React, { Component } from 'react';
import './components/_global/fontawesome';
import '@material/react-ripple/index.scss';
import styles from './App.module.scss';

class App extends Component {
    handleClick(): void {
        console.log('Clicked');
    }

    render() {
        return (
            <div className={styles.App}>
                <header className={styles.AppHeader}>
                    <p>This is for contestr</p>
                </header>
            </div>
        );
    }
}

export default App;
