import { useEffect, useState } from "react";
import axios from "axios";

const CountryDetails = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const capital = country.capital[0];

  useEffect(() => {
    const apiKey = import.meta.env.VITE_WEATHER_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`;

    axios.get(url).then((response) => {
      setWeather(response.data);
    });
  }, [capital]);
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital {country.capital}</p>
      <p>Area {country.area}</p>

      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>

      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        width="150"
      />

      <h2>Weather in {capital}</h2>
      {!weather && <p>Loading weather...</p>}

      {weather && (
        <div>
          <p>Temperature {weather.main.temp} °C</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <p>Wind {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
