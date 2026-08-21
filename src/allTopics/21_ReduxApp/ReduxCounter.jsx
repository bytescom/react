import { useDispatch, useSelector } from "react-redux";
import { incre, decre, reset } from "./redux";

const ReduxCounter = () => {
    
    //! used to access redux state and return it. 
    let count = useSelector((state) => state.counter)
    console.log(count);

    //! useDispatch returns function which is used to call actions
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incre())
    }

    return (
        <div>
            <h3>Redux Counter: {count}</h3>

            <div>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={()=> dispatch(decre())}>Decrement</button>
                <button onClick={()=> dispatch(reset())}>Reset</button>
            </div>
        </div>
    )
}

export default ReduxCounter;
