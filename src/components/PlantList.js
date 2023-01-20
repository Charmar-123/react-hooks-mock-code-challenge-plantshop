import React from "react";
import PlantCard from "./PlantCard";
import{useState, useEffect} from "react";

function PlantList({search, updatedList}) {

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(plantData => setList(plantData))
  }, [updatedList])


  const filteredList = list.filter(item => (
    item.name.toLowerCase().includes(search.toLowerCase())
  ))

  const plantCards = filteredList.map(({id, name, image, price}) => (
    <PlantCard key={id} image={image} name={name} price={price}/>
  ))
  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
