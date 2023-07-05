import { decrement, increment, incrementByAmount } from "../redux/features/counter";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Home = () => {
    const count = useAppSelector(state =>state.counter.count)
    const dispatch = useAppDispatch()
    return (
        <div>
            <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Decrement
        </button>
      </div>
        </div>
    );
};

export default Home;