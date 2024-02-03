import './App.css'
import {Card} from "flowbite-react";
import {Dice} from "./components/Dice.jsx";
import {useState} from "react";
import {nanoid} from 'nanoid'

function App() {

    const [dice, setDice] = useState(allNewDices())

    function generateNewDie() {
        return {
            id: nanoid(),
            value: Math.ceil(Math.random() * 6),
            isHeld: false
        }
    }

    function allNewDices() {
        const randomArray = []
        for (let i = 0; i < 10; i++) {
            randomArray.push(generateNewDie())
        }
        return randomArray
    }

    function rollDice() {
        setDice((prevDice) => prevDice.map(die =>
            die.isHeld ? die : generateNewDie()
        ))
    }


    function holdDie(id) {
        setDice((prevDice) =>
            prevDice.map(die =>
                die.id === id ? {...die, isHeld: !die.isHeld} : die
            )
        )
    }

    return (
        <main className={'dark:bg-gray-900 h-svh flex items-center justify-center content-center'}>
            <div className={'space-y-2'}>
                <header className={'flex flex-col space-y-1'}>
                    <h1 className={'text-center text-black dark:text-gray-200 text-4xl'}>Tenzies</h1>
                    <p className={'mx-auto max-w-[400px] text-center text-gray-600 dark:text-gray-400'}>Roll until all
                        dice are the same. Click each dice to freeze it at its current value between
                        rolls.</p>
                </header>
                <Card className={"mx-auto min-w-[300px]"}>
                    {dice.length > 0 && <div className={'grid grid-cols-2 md:grid-cols-5 gap-3'}>
                        {dice.map((d) => <Dice key={d.id} die={d} holdDie={holdDie}/>)}
                    </div>}
                    <button onClick={rollDice}
                    className={'rounded p-2 bg-cyan-700 text-lg font-bold text-gray-200 hover:bg-cyan-800'}
                    >Roll</button>
                </Card>
            </div>
        </main>
    )
}

export default App
