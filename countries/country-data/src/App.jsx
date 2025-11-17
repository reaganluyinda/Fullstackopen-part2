import React, { useEffect, useState } from "react";
import axios from "axios";
import CountryDetails from "./components/CountryDetails";

const App = () => {
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    console.log("loading countries...");

    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((Response) => {
        setCountries(Response.data);
      });
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  const filtered = countries.filter((country) =>
    country.name.common.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div>
      Find countries <input value={value} onChange={handleChange} />
      {value && (
        <div>
          {/* not specific matches */}
          {filtered.length > 10 && (
            <p>Too many matches, specify another filter</p>
          )}

          {/*  country matches above 1 but less of equal to 10 */}
          {filtered.length > 1 && filtered.length <= 10 && (
            <p>
              {filtered.map((country) => (
                <li key={country.cca3}>{country.name.common}</li>
              ))}
            </p>
          )}

          {/* details of specific match */}
          {filtered.length === 1 && <CountryDetails country={filtered[0]} />}
        </div>
      )}
    </div>
  );
};

export default App;
