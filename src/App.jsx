import { useState } from "react";
// import ClassBased from "./allTopics/01_Types-of-components/ClassBased";
// import FunctionBased from "./allTopics/01_Types-of-components/FunctionBased";
// import CounterFBC from "./allTopics/02_States/CounterFBC";
// import Heart from "./allTopics/02_States/Heart";
// import StatesInCBC from "./allTopics/02_States/StatesInCBC";
// import StatesInFBC from "./allTopics/02_States/StatesInFBC";
import ToggleComponent from "./allTopics/02_States/Toggle";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle((prev) => !prev);

  return (
    <>
      {/* <FunctionBased /> */}
      {/* <ClassBased /> */}
      {/* <StatesInFBC /> */}
      {/* <Heart /> */}
      
      <ToggleComponent />
    </>
  )
}

export default App