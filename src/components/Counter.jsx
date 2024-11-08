import Count from "./Count";
import Button from "./Button";

const Counter = ({count, onIncrement, onDecrement}) => {
    

    return (
        <div className="p-4 h-auto text-center bg-white rounded shadow">
            <Count count={count} />
            <div className="flex space-x-5 justify-center items-center pt-8">
                <Button handler={onIncrement}>Increment </Button>
                <Button type="danger" handler={onDecrement}>Decrement </Button>
            </div>
        </div>
    );
};

export default Counter;