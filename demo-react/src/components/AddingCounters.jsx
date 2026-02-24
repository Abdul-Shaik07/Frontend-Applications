import React, { useState } from 'react'

function AddingCounters({addingCounters}) {

    const [counters, setCounters] = useState(addingCounters);

    const addCounterExample = () => {
        setCounters([...counters, {id: counters.length + 1, value: 0}]);
    };

    const incrementExample = (id) => {
        setCounters(counters.map(counter => counter.id === id ? {...counter, value: counter.value + 1} : counter
        ));
    };

    const decrementExample = (id) => {
        setCounters(counters.map(counter => counter.id === id ? {...counter, value: Math.max(0, counter.value - 1)} : counter
        ));  
    };

  return (
    <div>
        <div className="add-counters">
            <button onClick={addCounterExample} className='add-counter-button'>Add Counter</button>
            <ul>
                {
                    counters.map((counter, index) => (
                        <li key={index}>
                            COUNTER {counter.id} : {counter.value} 
                            <button className='increment-button' onClick={() => {incrementExample(counter.id)}}>Increment</button>
                            <input className='increment-button' type="button" value="Decrement" onClick={() => {decrementExample(counter.id)}}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default AddingCounters;