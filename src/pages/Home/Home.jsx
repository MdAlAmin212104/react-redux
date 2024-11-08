import Counter from "../../components/Counter"
import State from "../../components/State";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../features/Counters/CounterSlice";





const Home = () => {
    const counters = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    const handleIncrement = (counterId) =>{
       dispatch(increment(counterId))
    }


    const handleDecrement = (counterId) =>{
        dispatch(decrement(counterId))
    }

    const totalCount = counters.reduce((sum, current) => sum + current.value, 0)


    return (
        <div className="m-screen h-screen p-10 bg-gray-100 text-slate-700">
            <h1 className="mx-auto text-center text-4xl font-bold">
                Simple Counter Application
            </h1>
            <div className="max-w-md mx-auto mt-10 space-y-5">
                {
                    counters.map((counter) => <Counter 
                        key={counter.id}
                        count = {counter.value}
                        onIncrement={()=> handleIncrement(counter.id)}
                        onDecrement={()=> handleDecrement(counter.id)}
                        />
                    )
                }
                <State totalCount={totalCount}/>
            </div>
            
        </div>
    );
};

export default Home;