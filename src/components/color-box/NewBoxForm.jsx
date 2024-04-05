import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {

const INITIAL_STATE = {
    color: ' ',
    width: ' ',
    height: ' ',
}

const [formData, setFormData] = useState(INITIAL_STATE)

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({
        ...formData,
        [name]: value
    }))
}

const handleSubmit = (e) => {
    e.preventDefault();
    addBox({...formData});
    setFormData(INITIAL_STATE)
}


return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="color">Color: </label>
        <input id="color" type="text" name="color" placeholder="Color" value={formData.color} onChange={handleChange}/>

        <label htmlFor="width">Width px: </label>
        <input id="width" type="integer" name="width" placeholder="Width px" value={formData.width} onChange={handleChange}/>

        <label htmlFor="height">Height px: </label>
        <input id="height" type="integer" name="height" placeholder="Height px" value={formData.height} onChange={handleChange}/>
        <button>Add Box</button>
    </form>
)

}

export default NewBoxForm