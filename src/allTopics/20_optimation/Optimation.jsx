import { useCallback, useMemo, useState } from "react"
import Child from "./Child";

const Optimation = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const handleAdd = () => setAdd((prev) => prev + 1);
  const handleMinus = () => setMinus((prev) => prev - 1);

  // const multiply = () =>{
  //   console.log("multiply");
  //   return add * 5;
  // }


  /**
   * It returns a memoized value
   * It helps to avoid the unessary use of calculation
   * useMemo(callback, []) [] - dependenies
   */

  const multiply = useMemo(() => {
    console.log("multiply");
    return add * 5;

  }, [add]);


  //  const data = ()=> {
  //   console.log("hey, I am using.");
  //  }


  /**
   * It returns a memoized function
   * It helps to avoid the unessary render the function
   * useCallback(callback, []) [] - dependenies
   */
  const data = useCallback(() => {
    console.log("Hey, I am child function");
  }, [])


  return (
    <div>
      <h1>learn Optimation</h1>

      <section>
        <h3>Increment {add}</h3>
        <button onClick={handleAdd}>Increment</button>
      </section>

      <hr />

      <section>
        <h3>Decrement {minus}</h3>
        <button onClick={handleMinus}>Decrement</button>
      </section>

      <hr />

      <section>
        <h3>Multiplication is {multiply}</h3>
      </section>

      <hr />

      <Child data={data} />

    </div>
  )
}

export default Optimation;


/**
 * Optimization technique
 * 
 * UseMemo
 * UseCallback
 * code - splitting
 * Virtualization
 * Debouncing
 * Throttling
 */
