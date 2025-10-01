import React, { useState } from 'react'

function Form({form}) {

    const[formData, setFormData] = useState(form);

    const handleClick = (e) => {
        const {name, value, checked, type} = e.target;
        setFormData({...formData, [name]: type === 'checkbox' ? checked : value }
        )
    }

  return (
    <>
        <div className="form-container">
            <h1>Form Example</h1>
            <form action="">
                <div className="form-field">
                    {/* form - text */}
                    <div className="form-text">
                        <label htmlFor="">Text: </label>
                        <input type="text" name="text" id="" value={formData.text} onChange={handleClick}/>
                    </div>
                    {/* form - text */}
                    <div className="form-checkbox">
                        <input type="checkbox" name="checkbox" id="" checked={formData.checkbox} onChange={handleClick}/>
                        <label htmlFor="">Checkbox</label>
                    </div>
                    {/* form - Radio */}
                    <div className="form-radio">
                        <label htmlFor="">Radio: </label>
                        <input type="radio" name="radio" id="" value= "option1" checked={formData.radio === 'option1'} onChange={handleClick}/> Option 1
                        <input type="radio" name="radio" id="" value= "option2" checked={formData.radio === 'option2'} onChange={handleClick}/> Option 2
                    </div>
                    {/* form - Radio */}
                    <div className="form-select">
                        <label htmlFor="">Select: </label>
                        <select name="select" id="" value={formData.select} onChange={handleClick}>
                            <option value="">--- Select any one in the below ---</option>
                            <option value="option1">option 1</option>
                            <option value="option2">option 2</option>
                        </select>
                    </div>
                </div>

                <div className="form-data">
                    <h3>Form Data</h3>
                    <p><strong>Text: </strong>{formData.text || 'N/A'}</p>
                    <p><strong>Checkbox: </strong>{formData.checkbox ? 'Agree with Terms & Conditions' : 'Disgaree with Terms & Conditions '}</p>
                    <p><strong>Radio: </strong>{formData.radio || 'N/A'}</p>
                    <p><strong>Select: </strong>{formData.select || 'N/A'}</p>
                </div>
                
            </form>
        </div>

    </>
  )
}

export default Form