
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState } from "react";

function PlantPage() {

  const [search, setSearch] = useState("")
  const [updatedList, setUpdatedList] = useState([]);

  const handleSearch = (searchValue) => {
    setSearch(searchValue)
    console.log(search);
  }

  const onFormSubmit = (updatedList) => {
    setUpdatedList(updatedList)
  }


  return (
    <main>
      <NewPlantForm onFormSubmit={onFormSubmit}/>
      <Search handleSearch={handleSearch}/>
      <PlantList search={search} updatedList={updatedList}/>
    </main>
  );
}

export default PlantPage;
