import { useState } from 'react'

function App() {
    const [dice, setDice] = useState([
        { roll: 1, isSelected: false },
        { roll: 2, isSelected: false },
        { roll: 3, isSelected: false },
        { roll: 4, isSelected: false },
        { roll: 5, isSelected: false },
        { roll: 6, isSelected: false },
        { roll: 7, isSelected: false },
        { roll: 8, isSelected: false },
        { roll: 9, isSelected: false },
        { roll: 10, isSelected: false },
    ]);

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function rollDice() {
        const updatedDice = dice.map((die) => {
            if (!die.isSelected) {
                return { ...die, roll: getRandomNumber(1, 6) };
            }
            return die;
        });
        setDice(updatedDice);
    }

    function toggleSelected(index) {
        const updatedDice = [...dice];
        updatedDice[index] = { ...updatedDice[index], isSelected: !updatedDice[index].isSelected };
        setDice(updatedDice);
    }

    // knowing whether all are selected and all are the same
    const allSelected = dice.every((die) => die.isSelected);
    const allSame = dice.every((die) => die.roll === dice[0].roll);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Tenzies</h1>
                <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            </header>
            <main>
                <div className="dice">
                    {dice.map((die, index) => (
                        <div
                            className='die'
                            key={index}
                            onClick={() => toggleSelected(index)}
                            style={{ backgroundColor: die.isSelected ? '#59E391' : 'white' }}
                        >
                            {die.roll}
                        </div>
                    ))}
                </div>
            </main>
            <footer onClick={rollDice}>
                <h1>{allSelected && allSame ? "reset" : "roll"}</h1>
            </footer>
        </div>
    );
}

export default App
