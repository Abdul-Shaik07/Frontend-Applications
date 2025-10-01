import React from 'react'


function Cards({cards}) {
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3">
                    <div className="card">
                        {/* <div className="card-header"> */}
                            <div className="card-list">
                                {
                                    cards.map((card, index) => (
                                        <div key={index} className="card-items">
                                            <h3>{card.title}</h3>
                                            <p>{card.description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        {/* </div>     */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )}
export default Cards;