import PropTypes from "prop-types";

export function Dice({die, holdDie}) {
    return (
        <button
            className={`min-w-[70px] p-4 text-2xl font-bold ${die.isHeld ? 'bg-green-400':'text-black bg-gray-200 dark:bg-gray-700 dark:text-gray-200'} cursor-pointer rounded drop-shadow-md border border-gray-300 dark:border-gray-600`}
            onClick={() => holdDie(die.id)}
        >
            {die.value}
        </button>
    )
}

Dice.propTypes = {
    die: PropTypes.object,
    holdDie: PropTypes.func
}
