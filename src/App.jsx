import { useState } from "react";
import Card from "./components/Card";
import data from "./data";
function App() {
  const [index, setIndex] = useState(0);
  const handlePrev = () => {
    if (index <= 0) {
      setIndex(data.length - 1);
    } else {
      setIndex((prev) => {
        return prev - 1;
      });
    }
  };
  const handleNext = () => {
    if (index >= data.length - 1) {
      setIndex(0);
    } else {
      setIndex((prev) => {
        return prev + 1;
      });
    }
  };
  const handleSurprise = () => {
    let ranNum = Math.floor(Math.random() * data.length);
    setIndex(ranNum);
  };
  return (
    <>
      <Card
        data={data[index]}
        handlePrev={handlePrev}
        handleNext={handleNext}
        handleSurprise={handleSurprise}
      />
    </>
  );
}

export default App;
