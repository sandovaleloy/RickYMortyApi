import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Img from "./components/Img";
import LocationInfo from "./components/LocationInfo";
import Pagination from "./components/Pagination";
import ResidentForm from "./components/ResidentForm";
import ResidentList from "./components/ResidentList";

const RESIDENTS_PERPAGE = 10;

function App() {
  const [location, setLocation] = useState();
  const [nameLocation, setNameLocation] = useState("");
  const [page, setPage] = useState(1);
  const [currentRange, setCurrentRange] = useState(1);

  const hanleSubmit = (inputValue) => {
    setNameLocation(inputValue);
  };

  const pagination = () => {
    if (!location) return [];
    const maxLimit = page * RESIDENTS_PERPAGE;
    const minLimit = maxLimit - RESIDENTS_PERPAGE;
    return location?.residents.slice(minLimit, maxLimit);
  };

  useEffect(() => {
    setPage(1);

    const isNumber = !isNaN(nameLocation) && nameLocation !== "";
    const URL = isNumber
      ? `https://rickandmortyapi.com/api/location/${nameLocation}`
      : `https://rickandmortyapi.com/api/location/?name=${nameLocation}`;

    axios
      .get(URL, { validateStatus: (status) => status < 500 })
      .then((res) => {
        if (res.status === 404) {
          alert("No se ha localizado o no existe, por favor use un Id");
          setLocation(null);
        } else {
          const data = Array.isArray(res.data.results)
            ? res.data.results[0]
            : res.data;
          setLocation(data);
        }
      })
      .catch((err) => {
        alert("An unexpected error occurred. Please try again.");
      });
  }, [nameLocation]);

  return (
    <div className="App">
      <Img />
      <LocationInfo location={location} />
      <ResidentForm hanleSubmit={hanleSubmit} />
      <ResidentList pagination={pagination} />
      <Pagination
        setPage={setPage}
        RESIDENTS_PERPAGE={RESIDENTS_PERPAGE}
        location={location}
        currentRange={currentRange}
        setCurrentRange={setCurrentRange}
      />
    </div>
  );
}

export default App;
