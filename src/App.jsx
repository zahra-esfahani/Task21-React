import { useEffect, useState } from "react";
import Input from "./main";
import { RandomNumber, cities } from "./helper/data";

function App() {
  const [hint, setHint] = useState("");
  const [array, setArray] = useState([]);
  const [searcharray, setSearchArray] = useState([]);
  useEffect(() => {
    const fetchCityData = async () => {
      setArray(await cities());
    };
    fetchCityData();
  }, []);
  useEffect(() => {
    const hintHandle = () => {
      if (!hint) {
        setHint("Enter Text");
      }
      const city = array.filter((element) => {
        if (
          element.slice(0, hint.length).toLowerCase() === hint ||
          element.slice(0, hint.length) === hint
        ) {
          return element;
        }
      });
      setSearchArray(city);
    };
    hintHandle();
  }, [hint]);
  useEffect(() => {
    const searchHandle = () => {
      if (searcharray.length) {
        let index = RandomNumber(searcharray.length);
        setHint((i) =>
          i
            .replace(searcharray[index].slice(0, hint.length), hint)
            .concat(searcharray[index].slice(hint.length))
        );
      }
    };
    searchHandle();
  }, [searcharray]);

  const handleChange = (event) => {
      setHint(event.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.elements[0]);
      e.target.elements[0].value = hint;  
  };
  return (
    <>
      <Input
        handleChange={handleChange}
        hint={hint}
        submitHandler={submitHandler}
      />
    </>
  );
}

export default App;


