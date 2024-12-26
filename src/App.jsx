import { useState } from "react";
import Card from "./components/Card";
import data from "./data";
function App() {
  const [index, setIndex] = useState(0);
  console.log(data[index]);
  return (
    <>
      <Card data={data[index]} />
    </>
  );
}

export default App;
