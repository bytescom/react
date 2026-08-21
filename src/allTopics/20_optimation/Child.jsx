import React from 'react'

const Child = (props) => {
    console.log("I am child", props.data);
    
  return (
    <div>
        <h3>Child</h3>
    </div>
  )
}

export default React.memo(Child);
// it is used to memoize a component until props are unchanged