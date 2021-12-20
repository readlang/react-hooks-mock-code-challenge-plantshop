import React, { useState } from "react";

function NewPlantForm( {addNewPlant} ) {
  const [ newPlant, setNewPlant ] = useState({
    name: "",
    image: "",
    price: 0,
  })

  function handleSubmit(event) {
    event.preventDefault()
    console.log("submit", newPlant)
    fetch("http://localhost:6001/plants", 
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( newPlant )
    })
    .then(r => r.json())
    .then(d => addNewPlant(d))  
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} >
        <input type="text" name="name" placeholder="Plant name" 
        value={newPlant.name} 
        onChange={e => setNewPlant( {...newPlant, name: e.target.value} ) } 
        />
        <input type="text" name="image" placeholder="Image URL" 
        value={newPlant.image}
        onChange={e => setNewPlant( {...newPlant, image: e.target.value} )}
        />
        <input type="number" name="price" step="0.01" placeholder="Price" 
        value={newPlant.price}
        onChange={e => setNewPlant( {...newPlant, price: e.target.value } )}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;