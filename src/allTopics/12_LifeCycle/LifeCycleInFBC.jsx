import { useState, useEffect, useRef } from 'react'

const LifeCycleInFBC = () => {
  const [count, setCount] = useState(0);
  const initialRender = useRef(true);
  const handleCount = () => setCount((prev) => prev + 1);

  useEffect(() => {
    console.log("Component Mounted");
    const id = setInterval(() => console.log("API Called"), 2000);

    return ()=>{
      clearInterval(id);
      console.log("Component Unmounted");
    }
  }, []);


  useEffect(() => {
    if(initialRender.current){
      initialRender.current = false;
      return;
    }
    console.log("Component Updated");
  },[count])

  return (
    <div>
      <h1>Learn LifeCycle in Function {count}</h1>
      <button onClick={handleCount}>Update</button>
    </div>
  )
}

export default LifeCycleInFBC;

/**
 * It behaves as mounting it componenet
 * 
 * @ans
 * useRef returns the cleanup function. It task is to clean up the all unwanted and remaining async function
 */


