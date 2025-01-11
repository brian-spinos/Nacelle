import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setValue } from "../store/exampleSlice";

interface ExampleState {
  example: {
    value: string;
  };
}

const ExampleComponent = () => {
  const value = useSelector((state: ExampleState) => state.example.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Value: {value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(setValue(10))}>Set to 10</button>
    </div>
  );
};

export default ExampleComponent;
