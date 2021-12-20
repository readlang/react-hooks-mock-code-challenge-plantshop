import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants ] = useState([])
  const [searchBox, setSearchBox] = useState("")

  useEffect( () => (
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(d => setPlants(d))
  ), [])

  function addNewPlant(newPlant) {
    console.log("new plant", newPlant)
    setPlants( [...plants, newPlant] )
  }

  let filteredPlants = [...plants]
  if (searchBox !== "") {
    filteredPlants = plants.filter(x => x.name.includes(searchBox) )
  }

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search searchBox={searchBox} setSearchBox={setSearchBox} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
