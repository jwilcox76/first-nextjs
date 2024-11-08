import React, {useEffect, useState} from "react";

export default function Counter({incrementBy = 1, bgColor = "white"}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count > 10){
            setCount(0);
        }
    });
  
    return (
      <div style={{backgroundColor:bgColor}}>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + incrementBy)}>Increment</button>
      </div>
    );
  }
