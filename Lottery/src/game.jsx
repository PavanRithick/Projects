import { useState, useEffect } from "react";

export default function Game() {
    let [rand, setRand] = useState({ num: 0, isWon: false });
    let [sum, setSum] = useState(0);

    let getRand = () => {
        return Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    };

    let newRand = () => {
        const newNumber = getRand();
        setRand({ num: newNumber, isWon: false });
        calculateSum(newNumber);
    };

    let calculateSum = (num) => {
        let x = num % 10;
        let y = Math.floor((num / 10) % 10);
        let z = Math.floor(num / 100);
        let sum = x + y + z;
        setSum(sum);
        if (sum === 15) {
            setRand(prevState => ({ ...prevState, isWon: true }));
        } else {
            setRand(prevState => ({ ...prevState, isWon: false }));
        }
    };

    useEffect(() => {
        calculateSum(rand.num);
    }, [rand.num]);
//     Effect Callback: () => { calculateSum(rand.num); }

// This is the effect callback function. It contains the code that you want to run as a side effect. In this case, it calls the calculateSum function with rand.num as the argument. The calculateSum function calculates the sum of the digits of the given number and updates the state (sum and isWon).
// Dependency Array: [rand.num]

// This is the dependency array. It tells React to run the effect callback only when the value of rand.num changes.
// If rand.num changes, the effect callback will be executed. If rand.num does not change, the effect callback will not run.

    return (
        <div>
            <h4>LOTTERY {rand.isWon ? "WON" : ""}</h4>
            <p>LOTTERY TICKET: {rand.num}</p>
            <p>SUM OF DIGITS: {sum}</p>
            <button onClick={newRand}>Get new ticket</button>
        </div>
    );
}
