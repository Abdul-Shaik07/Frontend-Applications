import React, { useState } from 'react'


function IncrementAndDecrementBadges() {
    
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        if(count <= 0) {
            alert("Count cannot be negative");
            setCount(0);
        } else {
            setCount(count - 1);
        }
    }
  return (
    <div>
        <div className="increment-decrement">
            <h2>Increment and Decrement Badges</h2>
            <span>
                <button onClick={decrement}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
                    </svg>
                </button>
                <p>{count}</p>
                <button onClick={increment}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                    </svg>
                </button>
            </span>
        </div>
    </div>
  )
}

export default IncrementAndDecrementBadges;