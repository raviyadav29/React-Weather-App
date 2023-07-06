import React, { useEffect, useState } from "react";
import "./Style.css";

const WeatherApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Delhi");
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const data = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8d971eec8014a0f943e03ed7d6bb5b0a`;
      const response = await fetch(data);
      const result = await response.json();
      console.log(result);
      setCity(result.main);
    };
    fetchApi();
  }, [search]);

  return (
    <div className={theme ? "dark" : "light"}>
      <div className="container">
        <div className="btn-class">
          <h1>React Weather App</h1>
          <h1>
            <button onClick={() => setTheme(!theme)} className="btn">
              Theme Change
            </button>
          </h1>
        </div>
        <div className="container-input">
          <input
            type="search"
            value={search}
            className="input-search"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="errorMsge">No Found Data</p>
        ) : (
          <div className="main-class">
            <h2 className="location-class">{search}</h2>
            <h1 className="location-temp">{city.temp}°Cel</h1>
            <h3 className="temp_max">
              Max Temp-{city.temp_max}°Cel | Min Temp-{city.temp_min}°Cel |
              Humidity - {city.humidity}%
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};
export default WeatherApp;