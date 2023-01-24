import './App.css';
import Navbar from './components/Navbar/Navbar';
import Mainpage from './components/Mainpage/Mainpage';
import { useState } from 'react';

const App = () => {
    const [count, setCount] = useState (0);
    const [final, setFinal] = useState (0);
    const handleInc = () => {
        setCount (prevCount => prevCount + 1);
    };

    const handleDec = () => {
        setCount (prevCount => {
            if (prevCount >= 1) 
                return prevCount - 1;
            else return prevCount;
        });
    };

    const onAddToCart = () => {
        setFinal (() => count);
    }

    const onDeleteItem = () => {
        setFinal (0);
        setCount (0);
    }
    return (
        <div className="App">
            <Navbar onDelete={onDeleteItem} final={final} />
            <Mainpage addToCart={onAddToCart}  currCount={count} handleIncrement={handleInc} handleDecrement={handleDec} />
        </div>
    );
}

export default App;
