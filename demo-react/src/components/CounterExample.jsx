import React from 'react'
import { useState } from 'react'

function CounterExample({counterExample}) {
    const [count, setCount] = useState(0);

    const increment = () => {
        if(count >= 0) {
            setCount(count + 1); 
        } 
        //setCount(count + 1);
    }

    const decrement = () => { 
        if(count <= 0) {
            alert("Count cannot be negative");
        } else {
            setCount(count - 1);
        } 
    }

    const reset = () => {
        if(count !== 0) {
            setCount(0);
        }
    }

  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-list-items">
                            <h2>Counter Example</h2>
                            <p>count is: {count}</p>
                            <div className="buttons">
                                {
                                    counterExample.map((counter, index) => (
                                        <div key={index} className='buttons-list'>
                                            <input type="button" value={counter.name} 
                                                                 onClick={counter.name === "Increment" ? increment : 
                                                                          counter.name === "Decrement" ? decrement : reset} />
                                        
                                        </div>
                                    ))
                                }    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>





        {/* <h2>Counter Example</h2>
        <button className = "counterButton" onClick={increment}>Count is: {count}</button> */}

    </div>
  );
}

export default CounterExample