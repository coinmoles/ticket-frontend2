import Home from "./components/home";
import Book from "./components/book";
import Cancel from "./components/cancel";
import { Route } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className="App">
            <Route path="/" exact component={Home} />
            <Route path="/book" exact component={Book} />
            <Route path="/cancel" exact component={Cancel} />
        </div>
    );
}

export default App;
