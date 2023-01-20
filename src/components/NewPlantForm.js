import React, { useState } from "react";

function NewPlantForm({ onFormSubmit }) {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(plantObj);
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers:
        { "Content-Type": "application/json" },

      body: JSON.stringify(plantObj)



    })
      .then(res => res.json())
      .then((updatedList) => {
        onFormSubmit(updatedList);
      })
      .then(() => {
        setName("");
        setImage("");
        setPrice();
      })
  }

  const plantObj = {
    name: name,
    image: image,
    price: price,
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} >
        <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="name" placeholder="Plant name" />
        <input onChange={(e) => setImage(e.target.value)} value={image} type="text" name="image" placeholder="Image URL" />
        <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
