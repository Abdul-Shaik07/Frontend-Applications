import React from 'react'

function FoodItems({foodItems}) {

    const handleOrder = () => {
        alert("Your order has been placed successfully!");
    }

    // const handleMouseOver = (e) => {
    //     e.target.style.backgroundColor = "lightgreen";
    // }

  return (
    <div>
       <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-lists">
                            { foodItems.map((foodItem, index) => (
                                <div className="card-items" key={index}>
                                    <img src={foodItem.image} alt="food"/>
                                    <h3>{foodItem.title}</h3>
                                    <p>{foodItem.description}</p>
                                    <h4>{`Price: ${foodItem.price}`}</h4>
                                    <input type="button" value={foodItem.button} onClick={handleOrder} /*onMouseOver={handleMouseOver}*/  />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FoodItems