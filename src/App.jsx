import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  
  const [people, setPeople] = useState(data);

  const clearList = () =>{
    setPeople([]);
  }
  return (
  <>
    <h2>The list contains {people.length} people</h2>
    <List people = {people} />
    <button type="button" className="btn" onClick={clearList}>Clear list</button>
  </>)
};
export default App;
